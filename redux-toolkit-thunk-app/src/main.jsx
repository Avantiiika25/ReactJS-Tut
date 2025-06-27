import React from 'react';                              // Import React
import ReactDOM from 'react-dom/client';                // Import ReactDOM for rendering
import { Provider } from 'react-redux';               // Import Provider to pass the Redux store to the app
import store from './store';                          // Import our Redux store
import TodoList from './components/TodoList';         // Import the TodoList component

// Render the app and wrap it with Provider so the Redux store is available
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <TodoList />
  </Provider>
);
