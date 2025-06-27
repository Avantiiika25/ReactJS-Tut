import { useState } from "react";

function UserProfile() {
    const [user, setUser] = useState({ name: "Vishal", age: 25 });

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <button onClick={() => setUser({...user, age: user.age + 1})}>Increase Age</button>
        </div>
    )
}

export default UserProfile;