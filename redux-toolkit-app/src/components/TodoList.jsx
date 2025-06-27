import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, setStatus } from "../features/todoSlice";
import { useState } from "react";

const TodoList = () => {
    const [todoText, setTodoText] = useState('');
    const todos = useSelector((state) => state.todos.todos);
    const status = useSelector((state) => state.todos.status);
    const dispatch = useDispatch();

    const handleTodo = () => {
        if(todoText) {
            dispatch(addTodo({
                id: Date.now(),
                text: todoText
            }))
            setTodoText('');
        }
    }

    return (
        <div>
            <h2>Todo List (status: {status})</h2>

            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Add a todo"
            />
            <button onClick={handleTodo}>Add Todo</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                    </li>
                ))}
            </ul>

            <button onClick={() => dispatch(setStatus('completed'))}>
                Set Status: Completed
            </button>

        </div>
    )

}

export default TodoList;
