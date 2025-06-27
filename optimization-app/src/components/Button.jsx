// ---- Child Component (Button.js) ----
import React from "react";

const Button = ({ onClick }) => {
  console.log("🚀 Button Rendered!");

  return <button onClick={onClick}>Memoized Log Message</button>;
};

export default React.memo(Button); // 🔥 React.memo prevents unnecessary re-renders