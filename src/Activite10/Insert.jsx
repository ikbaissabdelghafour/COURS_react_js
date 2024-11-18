import React,{useState} from 'react'

function Insert({oninsert}) {
    const [id,setId]=useState()
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [adr,setAdr]=useState('')

  return (
    <form onSubmit={e=>e.preventDefault()}>
      <label htmlFor="">Numero</label>
      <input required onChange={e=>setId(e.target.value)} value={id} type="number" />
      <label htmlFor="">Nom</label>
      <input required onChange={e=>setNom(e.target.value)} value={nom} type="text" />
      <label htmlFor="">Prenom</label>
      <input required onChange={e=>setPrenom(e.target.value)} value={prenom} type="text" />
      <label htmlFor="">Adresse</label>
      <input required onChange={e=>setAdr(e.target.value)} value={adr} type="text" />
    <button onClick={()=>oninsert({id:id,nom:nom,prenom:prenom,adr:adr},)}>Ajouter</button>
    </form>
  )
}

export default Insert
