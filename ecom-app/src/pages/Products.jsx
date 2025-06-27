import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// TODO: Import fetchProducts action from productSlice
import { fetchProducts } from "../redux/slices/productSlice";
// TODO: Import addToCart action from cartSlice
import { addToCart } from "../redux/slices/cartSlice";

const Products = () => {
  // TODO: Initialize useDispatch for dispatching actions
  const dispatch = useDispatch();

  // TODO: Get products data and status from Redux store using useSelector
  const { items, status } = useSelector((state) => state.products);

  // TODO: Fetch products from API when component mounts
  useEffect(() => {
    // Dispatch fetchProducts action
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#FFA725]">Products</h2>

      {/* Loading State */}
      {status === "loading" && <p className="text-center text-gray-500">Loading...</p>}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((product) => (
          <div key={product.id} className="bg-[#FFF] p-4 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between h-[350px] border border-[#C1D8C3]">
            <div>
              <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
              <h3 className="text-lg font-semibold h-14 overflow-hidden text-[#6A9C89]">{product.title}</h3>
              <p className="text-[#FFA725] font-bold">${product.price}</p>
            </div>
            {/* TODO: Implement Add to Cart functionality */}
            <button onClick={() => dispatch(addToCart(product))} className="w-full mt-3 bg-[#FFA725] text-[#6A9C89] px-4 py-2 rounded-md hover:bg-[#6A9C89] hover:text-[#FFA725] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;




