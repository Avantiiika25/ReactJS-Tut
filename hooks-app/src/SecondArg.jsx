import { useEffect, useState } from "react";

function SecondArg() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);

    // case 1 - empty dependency array
    useEffect(() => {
        console.log("this will run on initial render");
    }, []);

    // case 2 - value inside dependency array
    useEffect(() => {
        console.log("count changed");
    }, [count]);

    // case 3 - no dependency array
    useEffect(() => {
        console.log("will run on each and every render");
    });

    return (
        <div>
            <h2>Hello let's learn second argument of useEffect hook</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <h3>Age: {age}</h3>
            <button onClick={() => setAge(age+1)}>Increment</button>
        </div>
    )
}

export default SecondArg;