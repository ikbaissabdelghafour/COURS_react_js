import React from 'react'
import { useSelector } from 'react-redux'

function Chiffredaffaire() {
    const clients = useSelector(state=>state.clients)
    const commandes = useSelector(state=>state.commandes)
  return (

    <>
    <fieldset>
    <legend>Chiffre d'affaire par client </legend>   
    <ul>
        {clients.table.map((ele,i)=><li key={i}> client de ID {ele.id}  :{
              commandes.commande.reduce((acc,fin)=>ele.id==fin.client 
              ? acc + +fin.total:acc+0 ,0 )} </li>  )
              }
    </ul>
    </fieldset>  
    <fieldset>
    <legend>Chiffre d'affaire Total</legend>    
    {commandes.commande.reduce((acc,value)=>acc+ +value.total,0)} 
    </fieldset>  
    </>
  )
}

export default Chiffredaffaire
