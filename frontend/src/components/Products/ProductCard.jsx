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
import { addToCart } from "../../redux/feature/cartSlice";
// import SectionError from "../../containers/UI/Errors/SectionError";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddToCartApiMutation,
  useUpdateCartApiMutation,
} from "../../redux/apiService/api";
import { toast, ToastContainer } from "react-toastify";
import { useCartActions } from "../../hooks/useCartActions";

const ProductCard = ({ product }) => {
  const [addToCartApi] = useAddToCartApiMutation();
  const [updateCartApi] = useUpdateCartApiMutation();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const addCartItem = useCartActions();
  console.log(items);

  const handleAddToCart = (product_id, title, price) => {
    addCartItem(product_id, title, price);
  }

  return (
    <StyledCard>
      <ToastContainer />
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
        <Button
          fullWidth
          variant="contained"
          onClick={() =>
            handleAddToCart(product.id, product.title, product.price)
          }
        >
          Add to Cart
        </Button>
      </Box>
    </StyledCard>
  );
};

export default ProductCard;
