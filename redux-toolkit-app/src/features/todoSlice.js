import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    status: "idle"
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export const { addTodo, removeTodo, setStatus } = todoSlice.actions;
export default todoSlice.reducer;
