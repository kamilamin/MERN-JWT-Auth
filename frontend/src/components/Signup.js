import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
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
      url: 'http://localhost:5001/api/signup',
      data: data
    })
    return result
  }

  const handleSubmit =  (ev) => {
    ev.preventDefault();
    sendRequest(userDetails).then(response => {
      console.log(response.data);
      history('/login')
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box marginLeft="auto" marginRight="auto" width={300} display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
        <Typography variant='h2'>Signup</Typography>
          <TextField 
            variant='outlined' 
            name='name'
            placeholder='Username' 
            margin='normal' 
            value={userDetails.userName}
            onChange={handleChange}
          />
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
          <Button variant='contained' type='submit'>Signup</Button>
        </Box>
      </form>
    </div>
  )
}

export default Signup