// import { Component } from "react";

// class Welcome extends Component {
//     render() {
//         return <h1>Welcome to class component!</h1>
//     }
// }

// export default Welcome;



function Welcome({name, age}) {
    return (
        <h1>Hello {name} {age}</h1>
    )
}

export default Welcome;