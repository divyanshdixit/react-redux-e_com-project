import { AppBar, Button, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const StyledAppBar = styled(AppBar)(({  }) => ({
  backgroundColor: "#ffffff",
  color: "#000",
  boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
}));

export const Brand = styled(Typography)(({  }) => ({
  fontWeight: 700,
  fontSize: "1.2rem",
  cursor: "pointer",
}));

export const NavButton = styled(NavLink)(({ theme }) => ({
  color: "#000",
  textDecoration: "none",
  fontWeight: 500,
  padding: "6px 12px",
  borderRadius: 4,

  "&.active": {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
