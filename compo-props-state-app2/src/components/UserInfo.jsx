import { useState } from "react";

function UserInfo() {
    const [name, setName] = useState("Vishal");
    const [age, setAge] = useState(25);

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>

            <button onClick={() => setAge(age+1)}>Increase Age</button>
        </div>
    )
}

export default UserInfo;