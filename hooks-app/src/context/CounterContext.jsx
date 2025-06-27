import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <CounterContext.Provider value={{count, increment, decrement, theme, toggleTheme}}>
            {children}
        </CounterContext.Provider>
    )

}

export default CounterProvider;