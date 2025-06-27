import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// TODO: Import loginUser action from authSlice
import { loginUser } from "../redux/slices/authSlice";


const Login = () => {
  // TODO: Initialize state for email and password
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");

  // TODO: Initialize useDispatch for dispatching actions
  const dispatch = useDispatch();
  
  // TODO: Initialize useNavigate for navigation
  const navigate = useNavigate();

  // TODO: Get authentication status, error, and token from Redux store using useSelector
  const { status, error, token } = useSelector((state) => state.auth);


  // TODO: Implement handleLogin function to dispatch loginUser action and navigate on success
  const handleLogin = (e) => {
    e.preventDefault();
    // Dispatch loginUser action
    // Navigate to home page if login is successful
    dispatch(loginUser({email, password})).then((result) => {
      if(result.meta.requestStatus === "fulfilled") {
        navigate("/");
      }
    })
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFF5E4]">
      <div className="bg-white p-8 rounded-lg shadow-md border border-[#C1D8C3] w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#FFA725]">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            className="p-3 border border-[#C1D8C3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9C89]"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            className="p-3 border border-[#C1D8C3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A9C89]"
          />
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="mt-4 w-full bg-[#FFA725] text-white px-4 py-2 rounded-md hover:bg-[#6A9C89] transition disabled:opacity-50"
          >
            {status === "loading" ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {token && <p className="text-green-500 text-center mt-4">✅ Logged in successfully</p>}
      </div>
    </div>
  );
};

export default Login;



