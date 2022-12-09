import React, { useState } from 'react'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { authActions } from '../store';

function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const sendLogoutRequest = async () => {
    const result = await axios({
      method: "POST",
      url: 'http://localhost:5001/api/logout',
      withCredentials: true
    })
    return result
  }
  const handleLogout = async () => {
    await sendLogoutRequest().then(response => {
      console.log('response', response.status);
      if (response.status === 200) {
        dispatch(authActions.logout())
      }
    })
      .catch(error => { })
  }
  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h3'>MERN Auth</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs indicatorColor='secondary' onChange={(e, val) => setValue(val)} value={value} textColor='inherit'>
              {isLoggedIn ?
                <Tab onClick={handleLogout} to='/' LinkComponent={Link} label="Logout" />
                :
                <>
                  <Tab to='/login' LinkComponent={Link} label="Login" />
                  <Tab to='/signup' LinkComponent={Link} label="Signup" />
                </>
              }
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header