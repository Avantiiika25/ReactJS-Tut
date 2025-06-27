// import Greeting from "./Greeting";
// import Header from "./Header";
// import Footer from "./Footer";
// import Welcome from "./Welcome";
// import React from "react";
// import UserGreeting from "./UserGreeting";
// import Button from "./Button";


// function App() {
//   // let elem = React.createElement("h1", null, "AlmaBetter");
//   return (
//     <>
//       <Welcome name="Vishal" age={25} />
//       <Welcome name="Jay" age={27} />
//       <Welcome name="Neha" age={24} />
//       <Button btnName="Login" />
//       <Button btnName="Sign Up"/>
//       <Button btnName="Explore"/>
//     </>

//   );
// }

// export default App;



import React from 'react';
import Child1 from './Child1';

function App() {
  const message = "Hello from App Component!";

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Child1 message={message} />
    </div>
  );
}

export default App;
