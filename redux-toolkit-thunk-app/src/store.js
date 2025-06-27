import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import todoReducer from './features/todoSlice';    // Import our todos reducer

// Create the Redux store and include our todos reducer
const store = configureStore({
  reducer: {
    todos: todoReducer, // The 'todos' slice of state is managed by todoReducer
  },
});

export default store; // Export the store for use in our app
