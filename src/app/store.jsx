import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productsFetching,
} from "../features/productsSlice/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(productsFetching());
