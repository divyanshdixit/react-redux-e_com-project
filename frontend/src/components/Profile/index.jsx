import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const {user, token} = useSelector(state => state.auth);

    console.log(user, token);

  return (
    <Box>
        <h1> User Profile details: </h1>
    </Box>
  )
}

export default ProfilePage