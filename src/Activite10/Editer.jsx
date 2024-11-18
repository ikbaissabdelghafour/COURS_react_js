import React, { useEffect, useState } from 'react'

function Editer({monobj,onmodif}) {
    const [id,setId]=useState(monobj.id)
    const [nom,setNom]=useState(monobj.nom)
    const [prenom,setPrenom]=useState(monobj.prenom)
    const [adr,setAdr]=useState(monobj.adr)
    useEffect(
        ()=>
           { setId(monobj.id)
            setNom(monobj.nom)
            setPrenom(monobj.prenom)
            setAdr(monobj.adr)},[monobj.id,monobj.nom,monobj.prenom,monobj.adr]
    )
  return (
    <form onSubmit={e=>e.preventDefault()}>
      <label htmlFor="">Numero</label>
      <input onChange={e=>setId(e.target.value)} value={id} type="number" />
      <label htmlFor="">Nom</label>
      <input onChange={e=>setNom(e.target.value)} value={nom} type="text" />
      <label htmlFor="">Prenom</label>
      <input onChange={e=>setPrenom(e.target.value)} value={prenom} type="text" />
      <label htmlFor="">Adresse</label>
      <input onChange={e=>setAdr(e.target.value)} value={adr} type="text" />
    <button onClick={()=>onmodif({id:id,nom:nom,prenom:prenom,adr:adr},
)}>Modifier</button>
    </form>
  )
}

export default Editer
