import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice/cartSlice";

import productsReducer, {
  productsFetching,
} from "../features/productsSlice/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(productsFetching());
