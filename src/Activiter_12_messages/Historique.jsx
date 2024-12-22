import React, { useState } from 'react'

function Historique({mess, compt1,compt2,supprimer}) {

  
  return (
    <>
    <div>
        <h3>le nb de message envoyer de C1 vers C2 est : {compt1}</h3>
        <h3>le nb de message envoyer de C2 vers C2 est : {compt2}</h3>
    </div>
    <div>
      <h1>liste des message </h1>
      <h3>
        {console.log(mess)}
        
      {mess.map(
        ele=><li>  {ele.text} {ele.message}<button onClick={()=>supprimer(ele.message)}>Delete</button> </li>
      )}
     
      </h3>
  

    </div>
      
    </>
    
  )
}

export default Historique
