import { useState } from "react";
import { Toolbar, Box, IconButton, Menu, MenuItem } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Brand, NavButton, StyledAppBar } from "./styles";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* left */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Brand variant="h6">MyStore</Brand>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NavButton to="/">Home</NavButton>

          <NavButton to="/products">Products</NavButton>

          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>

        {/* right */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <NavButton  variant="outlined" to="/login">Login</NavButton>
          <NavButton variant="outlined" to="/register">Register</NavButton>

          {/* <IconButton onClick={handleProfileClick}>
            <AccountCircleOutlinedIcon fontSize="large" />
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> */}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
