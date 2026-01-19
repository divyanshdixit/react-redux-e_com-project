import { Box, Button } from '@mui/material'
import React from 'react'

const PageLevelError = () => {
  return (
     <Box>
            <h1> Something went wrong </h1>
            <p> Unable to load, please try again - page level error</p>
            <Button onClick={() => window.location.href()}> Retry </Button>
        </Box>
  )
}

export default PageLevelError