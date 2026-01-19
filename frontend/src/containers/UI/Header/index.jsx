import { useState } from "react";
import { Toolbar, Box, IconButton, Menu, MenuItem } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Brand, NavButton, StyledAppBar } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/feature/authSlice";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // throw new error('testing')
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    // dispatch setlogout:
    dispatch(logout());
  };

  const handleOpenProfile = () => {
    handleClose();
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
          {token ? (
            <>
              <IconButton onClick={handleProfileClick}>
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <Link to="/profile">
                  <MenuItem>
                    <IconButton size="small">
                      <PersonOutlineIcon />
                    </IconButton>
                    Profile
                  </MenuItem>
                </Link>

                <MenuItem onClick={handleLogout}>
                  <IconButton size="small">
                    <LogoutIcon />
                  </IconButton>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <NavButton variant="outlined" to="/login">
                Login
              </NavButton>
              <NavButton variant="outlined" to="/register">
                Register
              </NavButton>
            </>
          )}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
