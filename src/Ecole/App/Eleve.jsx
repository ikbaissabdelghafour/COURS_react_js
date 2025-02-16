import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ajouterEleve,supprimerEleve,editerEleve,updateEleve,filtreEleve,incrementEleve} from '../Redux/Action'
function Eleve() {
   const  [id , setId] =useState()
   const  [nom , setNom] =useState()
   const  [prenom , setPrenom] =useState()
   const  [classe , setClass] =useState()
   const [affich , setAffich] = useState(true)
   const eleves = useSelector(state => state.eleves) 
   const classes = useSelector(state => state.classes) 
   const dispatch = useDispatch();
   useEffect(()=>{
      setNom(eleves.eleve.nom);
      setPrenom(eleves.eleve.prenom);
      setClass(eleves.eleve.classe);
      setId(eleves.eleve.id);

   },[eleves.eleve])
   console.log(eleves)
  return (
    <>
    <form onSubmit={e=>e.preventDefault()}>
        <label >  nom  </label> 
        <input type="text" value={nom}  onChange={e=>setNom(e.target.value)}/>   
        <label >  prenom </label> 
        <input type="text" value={prenom}  onChange={e=>setPrenom(e.target.value)}/>   
        <label >  classes </label> 
        <select value={classe} onChange={e=>setClass(e.target.value)}>
            <option value="">choisir un eleve</option>
            {
              classes.classes.map((ele)=>
            <option value={ele.id}>
                {ele.nom}
            </option>
            )  
            }
        </select>
        <button onClick={()=>dispatch(ajouterEleve({id:Date.now() , nom,prenom,classe}))} >Ajouter</button>
        <button onClick={()=>dispatch(updateEleve({id,nom,prenom,classe}))} >update</button>


    </form> 

    <table  border={1} >
      <thead>
        <tr>
          <th>Nom</th>
          <th>prenom</th>
          <th>class</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
    {eleves.eleves.map(ele=>

      <tr> 
        <td> {ele.nom} </td>
        <td> {ele.prenom} </td>
        <td> {ele.classe} </td>
        <td>
           <button onClick={()=>dispatch(supprimerEleve(ele.id))} >DELETE</button> 
           <button onClick={()=>{dispatch(editerEleve(ele.id)) ; setAffich(false) }} >EDITER</button> 
        </td>
      </tr>
    )}

      </tbody>

    </table>



    </>
  )
}

export default Eleve
