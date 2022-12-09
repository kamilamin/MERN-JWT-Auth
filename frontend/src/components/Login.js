import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store';

export default function Login() {
  const dispatch = useDispatch()
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });
  const history = useNavigate()

  const handleChange = (ev) => {
    setUserDetails(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value
    }))
  }

  const sendRequest = async (data) => {
    const result = await axios({
      method: "POST",
      url: 'http://localhost:5001/api/login',
      data: data
    })
    return result
  }

  const handleSubmit =  (ev) => {
    ev.preventDefault();
    sendRequest(userDetails).then(response => {
      console.log();
      if (response.status === 200) {
        dispatch(authActions.login())
        history('/user')
      }
    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box marginLeft="auto" marginRight="auto" width={300} display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
        <Typography variant='h2'>Login</Typography>
          <TextField 
            variant='outlined' 
            name='email'
            type={'email'}
            placeholder='Email' 
            margin='normal' 
            value={userDetails.email}
            onChange={handleChange}
          />
          <TextField 
            type={'password'}
            variant='outlined' 
            name='password'
            placeholder='Password' 
            margin='normal' 
            value={userDetails.password}
            onChange={handleChange}
          />
          <Button variant='contained' type='submit'>Login</Button>
        </Box>
      </form>
    </div>
  )
}
