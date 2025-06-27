import React, { useState, useCallback } from "react";
import throttle from "lodash/throttle";

function ThrottleExample() {
  const [count, setCount] = useState(0);

  const throttledIncrement = useCallback(
    throttle(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000),
    []
  );

  const handleButtonClick = () => {
    throttledIncrement();
  };

  return (
    <div style={{ border: "2px solid #f44336", padding: "1rem" }}>
      <h2>Throttle Example</h2>
      <button onClick={handleButtonClick} style={{ padding: "0.5rem 1rem" }}>
        Click me rapidly!
      </button>
      <p>
        <strong>Click Count:</strong> {count}
      </p>
      <p style={{ color: "gray" }}>
        Throttled: Function runs at most once per second.
      </p>
    </div>
  );
}

export default ThrottleExample;
