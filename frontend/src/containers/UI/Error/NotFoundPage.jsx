import { Box, Button } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate();
    const rediretToHome = () => {
        navigate('/')
    }
    
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1> 404 Not Found </h1>
        <Button variant='contained' sx={{width: '50%'}} onClick={rediretToHome}> Go to Home Page</Button>
    </Box>
  )
}

export default NotFoundPage