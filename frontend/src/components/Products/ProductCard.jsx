import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { PriceText, StyledCard, StyledLink } from "./styles";
// import SectionError from "../../containers/UI/Errors/SectionError";

const ProductCard = ({ product }) => {
  return (
      <StyledCard>
        <StyledLink to={`${product.id}`}>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.title}
          />

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{product.title}</Typography>

            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>

            <PriceText variant="subtitle1">
              ₹ {product.price.toLocaleString()}
            </PriceText>
          </CardContent>
        </StyledLink>

        <Box sx={{ padding: 2 }}>
          <Button fullWidth variant="contained">
            Add to Cart
          </Button>
        </Box>
      </StyledCard>
  );
};

export default ProductCard;