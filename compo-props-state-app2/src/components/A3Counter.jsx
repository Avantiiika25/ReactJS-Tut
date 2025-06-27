import { useState } from "react";

function A3Counter() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default A3Counter;