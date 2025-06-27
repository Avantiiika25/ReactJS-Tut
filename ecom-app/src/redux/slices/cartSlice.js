import { createSlice } from "@reduxjs/toolkit";

// TODO: Create a function to load cart data from localStorage
const loadCartFromLocalStorage = () => {
  // Retrieve cart data from localStorage if available
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

const cartSlice = createSlice({
  name: "cart",
  // TODO: Initialize state with cart data from localStorage
  initialState: loadCartFromLocalStorage(),
  reducers: {
    // TODO: Implement addToCart reducer to add items to cart and update localStorage
    addToCart: (state, action) => {
      // Check if item exists in cart and update quantity
      // Otherwise, add new item to cart
      // Update localStorage
      const item = state.find((product) => product.id === action.payload.id);
      if(item) {
        item.quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1})
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    
    // TODO: Implement removeFromCart reducer to remove items from cart and update localStorage
    removeFromCart: (state, action) => {
      // Remove item from cart
      // Update localStorage
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    
    // TODO: Implement increaseQuantity reducer to increase item quantity and update localStorage
    increaseQuantity: (state, action) => {
      // Find item and increase quantity
      // Update localStorage
      const item = state.find((product) => product.id === action.payload);
      if(item) item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    
    // TODO: Implement decreaseQuantity reducer to decrease item quantity and update localStorage
    decreaseQuantity: (state, action) => {
      // Find item and decrease quantity if greater than 1
      // Update localStorage
      const item = state.find((product) => product.id === action.payload);
      if(item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    
    // TODO: Implement clearCart reducer to remove all items from cart and clear localStorage
    clearCart: (state) => {
      // Clear localStorage and return empty cart
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

