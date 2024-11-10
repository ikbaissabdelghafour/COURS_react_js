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
  return (
    <>
            <Resultat data={donnees} />
            <Saisie RechercherTheme={(s)=>setType(s)}/>
               le type de recherche est : {type}
            <button onClick={()=>f1(type)} > CHERCHE</button>
    </>
  )
}
export default App