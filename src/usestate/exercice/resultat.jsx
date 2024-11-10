import React, { useState } from "react";
import Saisie from './saisir';
function Resultat(props) {
  return (
    <div>
      {props.data.map((ele,index)=>
      <li key={index}>{ele.nom}</li>
      )}
      
    </div>
  )
}

export default Resultat
