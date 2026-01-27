import { createSlice } from "@reduxjs/toolkit";

const initState = {
  items: [], // [{id: , title, price: quantity: 2}, {qua: 1}]
  totalQuanity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart(state, action) {
      const cartItem = action.payload;
      console.log(cartItem);
      const existedItem = state.items.find(
        (i) => i.product_id === cartItem.product_id,
      );
      console.log(existedItem);
      if (existedItem) {
        existedItem.quantity = cartItem.quantity;
      } else {
        // new item
        state.items.push({ ...cartItem, quantity: 1 });
      }
      state.totalQuanity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0,
      );

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      );
    },
    setCart(state, action) {
      const items = action.payload;
      state.items = action.payload;

      const totalQuanity = items.reduce((acc, item) => acc + item.quantity, 0);

      const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );

      state.totalQuanity = totalQuanity;
      state.totalPrice = totalPrice;
    },
    removeFromCart(state, action) {},
    clearCart() {},
  },
});

export const { addToCart, removeFromCart, clearCart, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
