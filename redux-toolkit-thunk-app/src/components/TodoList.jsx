import React, { useEffect } from 'react';                     // Import React and useEffect hook
import { useSelector, useDispatch } from 'react-redux';        // Import hooks to access Redux state and dispatch actions
import { fetchTodos } from '../features/todoSlice';             // Import the async thunk action

const TodoList = () => {
  // Get todos, status, and error from the Redux store state
  const { todos, status, error } = useSelector((state) => state.todos);
  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // useEffect to dispatch the async thunk when the component mounts
  useEffect(() => {
    // If no API call is in progress, dispatch fetchTodos to start fetching data
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]); // Dependency array includes dispatch and status

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Todo List With Thunk</h2>
      {status === 'loading' && <p>Loading...</p>}           {/* Display loading message */}
      {status === 'failed' && <p>Error: {error}</p>}           {/* Display error message */}
      {status === 'succeeded' && (                            // When fetch is successful, display the todos
        <ul>
          {todos.slice(0, 5).map((todo) => (                   // Display first 5 todos for simplicity
            <li key={todo.id}>{todo.title}</li>               // Each todo's title in a list item
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList; // Export the component
