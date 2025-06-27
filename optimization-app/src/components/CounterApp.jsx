import React, { useState, useCallback } from "react";
import Button from "./Button"; // Child component

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  console.log("👨‍💻 CounterApp Rendered!");

  // 🔑 Normal function (recreates on every render)
  const logMessage = () => {
    console.log(`Current count is: ${count}`);
  };

  // 🔑 useCallback to memoize the function
  const memoizedLogMessage = useCallback(() => {
    console.log(`Current count is: ${count}`)
  }, [count])
  

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setAge(age + 1)}>Increment Age</button>

      {/* 🔥 Passing the memoized function to the child */}
      <Button onClick={memoizedLogMessage} />
    </div>
  );
};

export default CounterApp;

