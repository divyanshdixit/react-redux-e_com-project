import { Box, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <h1> 404 Page Not Found </h1>
        <NavLink to="/">
            <Button> Go to HomePage </Button>
        </NavLink>
    </Box>
  )
}

export default ErrorPage