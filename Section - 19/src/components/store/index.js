import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-slices';
import cartSlice from './cart-slices';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  }
})

export default store;