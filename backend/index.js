const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ejlha13.mongodb.net/mern-auth?retryWrites=true&w=majority`)
.then(() => {
    app.listen(5001);
    console.log('Database Connected! App is listening at 5000 port')
}).catch((error) => console.log(error))
