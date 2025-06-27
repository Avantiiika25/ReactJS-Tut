import { configureStore } from "@reduxjs/toolkit";
// TODO: Import productReducer from productSlice
import productReducer from "./slices/productSlice";
// TODO: Import cartReducer from cartSlice
import cartReducer from "./slices/cartSlice";
// TODO: Import authReducer from authSlice
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    // TODO: Add productReducer to the store
    products: productReducer,
    // TODO: Add cartReducer to the store
    cart: cartReducer,
    // TODO: Add authReducer to the store
    auth: authReducer
  },
});

export default store;









