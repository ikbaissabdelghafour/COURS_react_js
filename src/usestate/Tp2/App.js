// App.js
import React, { useState } from "react";
import Saisie from "./Saisie";
import Resultats from "./Resultats";

// Sample data
const list = [
  { nom: "banane", type: "fruit" },
  { nom: "Orange", type: "fruit" },
  { nom: "Kiwi", type: "fruit" },
  { nom: "Prune", type: "fruit" },
  { nom: "Navet", type: "legume" },
  { nom: "Tomate", type: "legume" },
  { nom: "Pomme de terre", type: "legume" },
  { nom: "clementine", type: "fruit" },
];

function App() {
  const [searchType, setSearchType] = useState("");
  const [results, setResults] = useState([]);

  // Function to handle search based on type
  const handleSearch = (type) => {
    setSearchType(type);
    const filteredResults = list.filter((item) => item.type === type);
    setResults(filteredResults);
  };

  return (
    <div>
      <h1>App</h1>
      <Saisie onSearch={handleSearch} />
      <h2>Type de recherche: {searchType}</h2>
      <Resultats results={results} />
    </div>
  );
}

export default App;
