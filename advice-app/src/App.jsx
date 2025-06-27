import { useState } from "react";
import Message from "./Message";
import './App.css';

function App() {
  let [advice, setAdvice] = useState("");
  let [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c+1);
  }

  return (
    <div className="container">
      <h1>{advice}</h1>
      <button className="get-advice-button original-button" onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  )
}

export default App;
