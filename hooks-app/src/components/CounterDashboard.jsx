import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CounterDashboard = () => {
    const { count, increment, decrement, theme, toggleTheme } = useContext(CounterContext);

    const dashboardStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center"

    }

    return (
        <div style={dashboardStyle}>
            <h1>Counter: {count}</h1>
            <button onClick={increment} style={{margin: "5px"}}>Increment</button>
            <button onClick={decrement} style={{margin: "5px"}}>Decrement</button>
            <br />
            <button onClick={toggleTheme} style={{marginTop: "5px"}}>
                Switch to {theme === "light" ? "dark" : "light"} Theme
            </button>
        </div>
    )
}

export default CounterDashboard;