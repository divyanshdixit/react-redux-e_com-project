import { useState } from "react";
import { Toolbar, Box, IconButton, Menu, MenuItem } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Brand, NavButton, StyledAppBar } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../../redux/feature/authSlice";
import { Link } from "react-router-dom";
import { StyledLink } from "../../../components/Products/styles";

const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const {totalQuanity} = useSelector(state => state.cart);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(setLogout())
    handleClose();
  }

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

          <Link to='/cart'>
            <IconButton target="">
              <ShoppingCartOutlinedIcon  titleAccess={totalQuanity}/>
            </IconButton>
          </Link>
        </Box>

        {/* right */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {token ? (
            <>
              <IconButton onClick={handleProfileClick}>
                <AccountCircleOutlinedIcon fontSize="large" />
              </IconButton>

              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <StyledLink to={'/profile'}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </StyledLink>
                <StyledLink to={'/checkout'}>
                  <MenuItem onClick={handleClose}>Checkout</MenuItem>
                </StyledLink>
                
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
