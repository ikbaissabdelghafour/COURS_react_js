import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ajouterClass,supprimerClass,editerClass,updateClass} from '../Redux/Action'
function Classes() {
  //  const  [id , setId] =useState()
   const  [nom , setNom] =useState()
   const  [date , setDate] =useState()
   const  [id , setId] =useState()
   const [affich , setAffich] = useState(true)
   const classes = useSelector(state => state.classes) 
   const dispatch = useDispatch();
   useEffect(()=>{
      setDate(classes.cla.date);
      setNom(classes.cla.nom);
      setId(classes.cla.id);
   },[classes.cla])
  return (
    <>
    <form onSubmit={e=>e.preventDefault()}>
        <label >  nom de class </label> 
        <input type="text" value={nom}  onChange={e=>setNom(e.target.value)}/>   
        <label >  date de creation </label> 
        <input type="date" value={date}  onChange={e=>setDate(e.target.value)}/>   
        <button onClick={()=>{dispatch(ajouterClass({id:Date.now() , nom, date ,Nb:0})); }} > Ajouter </button>
        <button disabled={affich}  onClick={()=>dispatch(updateClass({id,nom,date}))}  > Modifer </button>
    </form> 

    <table  border={1} >
      <thead>
        <tr>
          <th>Nom</th>
          <th>Date</th>
          <th>Nb</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
    {classes.classes.map(ele=>

      <tr> 
        <td> {ele.nom} </td>
        <td> {ele.date} </td>
        <td> {ele.Nb} </td>
        <td>
           <button onClick={()=>dispatch(supprimerClass(ele.id))} >DELETE</button> 
           <button onClick={()=>{dispatch(editerClass(ele.id)) ; setAffich(false) }} >EDITER</button> 
        </td>
      </tr>
    )}

      </tbody>

    </table>



    </>
  )
}

export default Classes
