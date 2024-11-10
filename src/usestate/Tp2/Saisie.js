// Saisie.js
import React, { useState } from "react";

function Saisie({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(input);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type (e.g., fruit, legume)"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Envoyer</button>
    </div>
  );
}

export default Saisie;

