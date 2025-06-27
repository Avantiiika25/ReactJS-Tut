import React, { useState, useMemo } from "react";

function InterestCalculator() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [username, setUsername] = useState("");

  // TODO - Memoized interest calculation
  const memoizedInterest = useMemo(() => {
    console.log("Calculating interest...");
    return (principal * rate) / 100;
  }, [principal, rate]);
  

  return (
    <div>
      <h1>Interest Calculator</h1>
      <label>Principal: </label>
      <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(Number(e.target.value))}
      />
      <br />
      <label>Rate: </label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
      />
      <br />
      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <h2>Total Interest: {memoizedInterest}</h2>
    </div>
  );
}

export default InterestCalculator;
