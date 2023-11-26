import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "../api/productsApi";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
