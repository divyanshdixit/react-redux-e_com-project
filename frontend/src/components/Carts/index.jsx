import React from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/feature/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  CartContainer,
  CartItemRow,
  ItemsSection,
  PageWrapper,
  QuantityBox,
  SummarySection,
} from "./styles";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, totalPrice, totalQuanity } = useSelector(
    (state) => state.cart,
  );
  console.log(items, totalPrice, totalQuanity);
  const handleIncrease = (item) => {
    // dispatch(addToCart(item));
  };

  const handleDecrease = (id) => {
    // dispatch(removeFromCart(id));
  };

  const handleRemoveItem = () => {}

  if (!items.length) {
    return (
      <PageWrapper textAlign="center" gap>
        <Typography variant="h6" marginBottom={1}>
          Your cart is empty
        </Typography>
        <Button variant="contained" onClick={() => navigate("/products")}>
          Let's Go to Shopping
        </Button>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>

      <CartContainer>
        {/* LEFT: Cart Items */}
        <ItemsSection>
          {items.map((item) => (
            <Box key={item.id}>
              <CartItemRow>
                <Box>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography color="text.secondary">
                    ₹ {item.price.toLocaleString()}
                  </Typography>
                </Box>

                <QuantityBox>
                  <IconButton
                    size="small"
                    onClick={() => handleDecrease(item.id)}
                  >
                    <RemoveIcon />
                  </IconButton>

                  <Typography>{item.quantity}</Typography>

                  <IconButton
                    size="small"
                    onClick={() => handleIncrease(item)}
                  >
                    <AddIcon />
                  </IconButton>

                  {/* delete */}
                  <IconButton
                    color="error"
                    onClick={() => handleRemoveItem(item.id, true)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </QuantityBox>
              </CartItemRow>

              <Divider sx={{ mb: 2 }} />
            </Box>
          ))}
        </ItemsSection>

        {/* RIGHT: Summary */}
        <SummarySection>
          <Typography variant="h6" gutterBottom>
            Price Details
          </Typography>

          <Box display="flex" flexDirection="column" gap={1} mb={1}>
            <Box display="flex" justifyContent="space-between">
              <Typography>Total Price</Typography>
              <Typography fontWeight={600}>
                ₹ {totalPrice.toLocaleString()}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Total Quantity</Typography>
              <Typography fontWeight={600}>{totalQuanity}</Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </Button>
        </SummarySection>
      </CartContainer>
    </PageWrapper>
  );
};

export default CartPage;
