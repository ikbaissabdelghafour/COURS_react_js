import React, { useState } from 'react'
import Resultat from './resultat'
import Saisie from './saisir';
function App() {
    const [type , setType]=useState('')
    const [donnees , setdonnees]=useState([])
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
      const f1=(a)=>setdonnees(list.filter((ele)=>ele.type===a))
      // filter data and insert data in donnees variable in array form
  return (
    <>
            <Resultat data={donnees} />
            {/* maping ing the donnees value for display it */}
            <Saisie RechercherTheme={(s)=>setType(s)}/> 
              {/* take data from input to use it in this file for insert it in type variable with setType function */}
               le type de recherche est : {type}
            <button onClick={()=>f1(type)} > CHERCHE</button>
            {/* when we click give the type value to f1 function for filter data */}
    </>
  )
}
export default App