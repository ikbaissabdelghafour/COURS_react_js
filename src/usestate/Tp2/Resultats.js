// Resultats.js
import React from "react";

function Resultats({ results }) {
  return (
    <div>
      <h3>Résultats :</h3>
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resultats;
