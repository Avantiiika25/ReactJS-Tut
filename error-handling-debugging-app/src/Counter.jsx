import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        debugger;
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter;