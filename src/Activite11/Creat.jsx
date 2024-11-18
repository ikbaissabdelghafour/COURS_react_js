import React, { useState } from 'react'

function Creat({new_object}) {
  const [id,setId]=useState('')
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  return (
    <>
     <form  onSubmit={e=>e.preventDefault()}>
      <label htmlFor=""></label><br />
      <input onChange={e=>setId(e.target.value)}  placeholder='ajouter un nouvelle id' type="number"  />
      <label htmlFor=""></label><br />
      <input onChange={e=>setNom(e.target.value)}  placeholder='Nom' type="text" />
      <label htmlFor=""></label><br />
      <input onChange={e=>setPrenom(e.target.value)}  placeholder='Prenom' type="text" />
      <button onClick={_=>new_object({id:id,nom:nom,prenom:prenom})}>Ajouter</button>
      </form> 
    </>
  )
}

export default Creat
