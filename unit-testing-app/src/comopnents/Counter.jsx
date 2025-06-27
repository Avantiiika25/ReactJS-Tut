import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => console.log("Error fetching advice: ", error));
  }, []);

  return (
    <div>
      <h1 data-testid="counter-value">Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="name-input"
      />

      <p data-testid="name-display">Hello, {name}</p>

      <p data-testid="advice">{advice ? advice : "Loading..."}</p>
    </div>
  );
};

export default Counter;
