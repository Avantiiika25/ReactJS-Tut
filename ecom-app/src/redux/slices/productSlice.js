import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// TODO: Create an async thunk to fetch products from API
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  // Send GET request to API and return response data
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    // TODO: Initialize items array to store fetched products
    items: [],
    // TODO: Initialize status for tracking API request state
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // TODO: Handle fetchProducts pending state
      .addCase(fetchProducts.pending, (state) => {
        // Update status to loading
        state.status = "loading";
      })
      // TODO: Handle fetchProducts fulfilled state and store fetched products
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // Update status and store products
        state.status = "succeded";
        state.items = action.payload;
      })
      // TODO: Handle fetchProducts rejected state
      .addCase(fetchProducts.rejected, (state) => {
        // Update status to failed
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;






