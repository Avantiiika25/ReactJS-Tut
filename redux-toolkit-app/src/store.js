import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todoReducer from "./features/todoSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})

export default store;