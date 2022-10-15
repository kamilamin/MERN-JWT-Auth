const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = 'MySecretKey'

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    
    let isUserExist;
    
    try {
        isUserExist = await User.findOne({ email: email });
    } catch (error) {
        console.log(error);
    }
    
    if (isUserExist) {
        return res.status(400).json({ message: 'User is already exist' })
    }
    
    const user = new User({
        name,
        email,
        password: bcrypt.hashSync(password)
    });
    
    try {
        await user.save()
    } catch (error) {
        console.log(error)
    }
    
    return res.status(201).json({ message: user })
}

const login = async (req, res, next) => {
    const {email, password} = req.body
    
    let isUserExist;
    try {
        isUserExist = await User.findOne({email})
    } catch (error) {
        return new Error(error)
    }
    if (!isUserExist) {
        return res.status(404).json({message: 'User not found'})
    }

    const checkPassword = bcrypt.compareSync(password, isUserExist.password)
    if (!checkPassword) {
        return res.status(404).json({message: 'Invalid Email/Password!'})
    }
    const token = jwt.sign({id: isUserExist._id}, JWT_SECRET_KEY, {
        expiresIn: '30s'
    });
    res.cookie(String(isUserExist._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: 'lax'
    })
    return res.status(200).json({message: 'Successfully Logged In', user: isUserExist, token})
}
const verifyToken = (req,res,next) => {
    const cookies = req.headers.cookie
    if (cookies === undefined) {
        res.status(401).json({message: "Token not found!"})
    }
    const token = cookies.split("=")[1]
    if (!token) {
        res.status(401).json({message: "Token not found!"})
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (error, user) => {
        if (error) {
            return res.status(401).json({message: "Invalid Token"})
        }
        req.id = user.id
    })
    next()
}

const getUser = async (req,res,next) => {
    const userId = req.id
    let user;
    try {
        user = await User.findById(userId, "-password")
    } catch (error) {
        return new Error(error)
    }
    if (!user) {
        return res.status(404).json({message: 'User Not Found'})
    }
    return res.status(200).json({user})
}

exports.signup = signup
exports.login = login
exports.verifyToken = verifyToken
exports.getUser = getUser
