import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counterSlice";


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>

            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>IncrementByAmount</button>
        </div>
    )
}

export default Counter;
