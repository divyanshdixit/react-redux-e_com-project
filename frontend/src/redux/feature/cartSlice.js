import { createSlice } from "@reduxjs/toolkit";

const initState = {
  items: [],// [{id: , title, price: quantity: 2}, {qua: 1}]
  totalQuanity: 0, 
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart(state, action) {
        const cartItem = action.payload; // {id: title}
        console.log(cartItem)
        const existedItem = state.items.find(i => i.id === cartItem.id);
        if(existedItem){
            existedItem.quantity += 1;
        }else{
            // new item
            state.items.push({...cartItem, quantity: 1});
        }
        console.log(state.items)
        state.totalQuanity += 1;
        state.totalPrice += cartItem.price

    },
    removeFromCart(state, action) {

    },
    clearCart(){

    }
  }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer