import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // check if the item is already in the cart
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //exist
      if (cartItemIndex >= 0) {
        state.cartItems[cartItemIndex].cartQuantity += 1;
      } else {
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const updatedCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
