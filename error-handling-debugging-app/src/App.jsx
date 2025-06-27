// import React from "react";

import Counter from "./Counter"

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false }
//   }

//   componentDidCatch(error) {
//     this.setState({ hasError: true });
//     console.error("Error caught:", error);
//   }

//   render() {
//     if(this.state.hasError) {
//       return <h2>Something went wrong!</h2>
//     }
//     return this.props.children;
//   }
// }

// function BuggyComponent() {
//   throw new Error("There is an error here!");
//   return <h1>Everything is fine! ✅</h1>
// }

// export default function App() {
//   return (
//     <ErrorBoundary>
//       <BuggyComponent />
//     </ErrorBoundary>
//   )
// }


function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}
export default App