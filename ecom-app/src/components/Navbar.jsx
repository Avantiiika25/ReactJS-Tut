import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// TODO: Import logout action from authSlice
import { logout } from "../redux/slices/authSlice";
// TODO: Import clearCart action from cartSlice
import { clearCart } from "../redux/slices/cartSlice";

const Navbar = () => {
  // TODO: Initialize dispatch using useDispatch
  const dispatch = useDispatch();
  
  // TODO: Initialize navigate using useNavigate
  const navigate = useNavigate();

  // TODO: Get authentication token from Redux store using useSelector
  const token = useSelector((state) => state.auth.token);

  // TODO: Implement handleLogout function to dispatch logout and clearCart actions, then navigate to login
  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());
    // Dispatch clearCart action
    dispatch(clearCart());
    // Navigate to login page
    navigate("/login");
  };

  return (
    <nav className="bg-[#FFA725] text-[#FFF5E4] py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-[#C1D8C3]">E-Shop</Link>
        </h1>

        {/* Center - Navigation Links */}
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-[#C1D8C3]">Products</Link>
          <Link to="/cart" className="hover:text-[#C1D8C3]">Cart</Link>
          <Link to="/checkout" className="hover:text-[#C1D8C3]">Checkout</Link>
        </div>

        {/* Right Side - Login/Logout Button */}
        <div>
          {!token ? (
            <Link to="/login" className="bg-[#FFF5E4] text-[#FFA725] px-4 py-2 rounded-md hover:bg-[#C1D8C3] transition">
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-[#6A9C89] px-4 py-2 rounded-md hover:bg-[#C1D8C3] transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








