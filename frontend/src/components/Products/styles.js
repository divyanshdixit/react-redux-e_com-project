import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3), // 8px
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
}));


export const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const PriceText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginTop: theme.spacing(1),
}));

export const ChipsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  flexWrap: "wrap",
}));

export const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'inherit'
}))