import { configureStore } from "@reduxjs/toolkit";
import productsSlice, {
  productsFetching,
} from "../featurse/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

store.dispatch(productsFetching());
