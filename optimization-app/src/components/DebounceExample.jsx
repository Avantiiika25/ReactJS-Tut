import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce"; // lodash ko install karne ke liye: npm install lodash

function DebounceExample() {
  // State for immediate input aur debounced (delayed) search term.
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // TODO - Debounce function
  const debouncedUpdate = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    setInputValue(e.target.value);
    debouncedUpdate(e.target.value);
  };

  return (
    <div
      style={{
        border: "2px solid #4caf50",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h2>Debounce Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something fun..."
        style={{ padding: "0.5rem", width: "100%" }}
      />
      <p>
        <strong>Search Term:</strong> {searchTerm}
      </p>
      <p style={{ color: "gray" }}>
        Debounced value updates after 500ms of inactivity.
      </p>
    </div>
  );
}

export default DebounceExample;
