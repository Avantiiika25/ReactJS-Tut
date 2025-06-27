import React from "react";
import { Routes, Route } from "react-router-dom";
// TODO: Import Navbar component
import Navbar from "./components/Navbar";
// TODO: Import Products, Cart, Checkout, and Login pages
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
// TODO: Import ProtectedRoute component
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>

      {/* TODO: Add Navbar component here */}
      <Navbar />
      
      <Routes>
        {/* TODO: Define route for Products page */}
        <Route path="/" element={<Products />} />

        {/* TODO: Define route for Login page */}
        <Route path="/login" element={<Login />} />

        {/* TODO: Define protected route for Cart page */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }        
        />
        
        {/* TODO: Define protected route for Checkout page */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }        
        />
      </Routes>
    </div>
  );
};

export default App;






