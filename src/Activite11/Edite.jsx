import React,{useState,useEffect} from 'react'

function Edite({obj_edit , current_obj}) {
    const [id,setId]=useState(current_obj.id)
    const [nom,setNom]=useState(current_obj.nom)
    const [prenom,setPrenom]=useState(current_obj.prenom)
    useEffect(
      ()=>
         { setId(current_obj.id)
          setNom(current_obj.nom)
          setPrenom(current_obj.prenom)},
          [current_obj.id,current_obj.nom,current_obj.prenom]
  )
    return (
      <>
       <form  align='center'  onSubmit={e=>e.preventDefault()}>
        <label htmlFor="id"></label><br />
        <input value={id} onChange={e=>setId(e.target.value)}  placeholder='ajouter un nouvelle id' type="number"  />
        <label htmlFor="nom"></label><br />
        <input value={nom} onChange={e=>setNom(e.target.value)}  placeholder='Nom' type="text" />
        <label htmlFor="prenom"></label><br />
        <input value={prenom} onChange={e=>setPrenom(e.target.value)}  placeholder='Prenom' type="text" /><br />
        <button onClick={_=>obj_edit({id:id,nom:nom,prenom:prenom})}>Ajouter</button>
        </form> 
      </>
    )
  
}

export default Edite
