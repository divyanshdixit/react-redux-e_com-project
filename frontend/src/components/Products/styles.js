import { Box, Button, Card, Typography } from "@mui/material";
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


export const PageWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1100,
  margin: "40px auto",
  padding: theme.spacing(3),
}));

export const ProductContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  backgroundColor: "#fff",
  padding: theme.spacing(3),
  borderRadius: 12,
  boxShadow: theme.shadows[3],

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ProductImage = styled("img")({
  width: "100%",
  maxWidth: 420,
  borderRadius: 8,
  objectFit: "cover",
});

export const DetailsBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

export const PriceTextDetails = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
  fontSize: 16,
  fontWeight: 600,
}));
