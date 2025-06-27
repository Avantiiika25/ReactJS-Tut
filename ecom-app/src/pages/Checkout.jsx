import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  // TODO: Get cart items from Redux Store using useSelector
  const cart = useSelector((state) => state.cart);
  
  // TODO: Calculate total price from cart items
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#FFA725]">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="bg-[#FFF5E4] p-6 rounded-lg shadow-md border border-[#C1D8C3] max-w-lg mx-auto">
          <ul className="divide-y divide-gray-300">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-[#6A9C89]">{item.title}</h3>
                  <p className="text-[#FFA725] font-bold">
                    {item.quantity} x ${item.price}
                  </p>
                </div>
                <span className="text-lg font-semibold text-gray-700">
                  {/* TODO: Calculate individual item total price */}
                  ${(item.quantity * item.price)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-bold text-right text-[#FFA725]">Total: ${total.toFixed(2)}</h3>
          </div>

          {/* TODO: Implement Place Order functionality with button */}
          <button
            onClick={() => alert("Order placed!")}
            className="mt-6 w-full bg-[#FFA725] text-[#FFF5E4] px-4 py-2 rounded-md hover:bg-[#6A9C89] transition"
          >Place Order</button>
          
        </div>
      )}
    </div>
  );
};

export default Checkout;

