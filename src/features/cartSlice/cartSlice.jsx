import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //check if the item is already in the cart
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // if exist
      if (cartItemIndex >= 0) {
        // increase quantity
        state.cartItems[cartItemIndex].cartQuantity += 1;
      } else {
        // add to cart
        const assembleCartItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembleCartItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const updatedItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedItem;
      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // if exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedItems;
      }
      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseCartQuantity(state, action) {
      // check
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getSubtotal(state, action) {
      const subtotal = state.cartItems.reduce((acc, item) => {
        const { cartQuantity, price } = item;
        const itemTotalPrice = cartQuantity * price;

        acc += itemTotalPrice;
        return acc;
      }, 0);
      state.totalAmount = subtotal;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseCartQuantity,
  getSubtotal,
} = cartSlice.actions;
export default cartSlice.reducer;
