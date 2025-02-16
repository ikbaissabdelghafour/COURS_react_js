import React,{useState, useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { ajouterService , modiferService , supprimerService , editerService  } from '../Redux/Action'
 

function Services() {
    
const [ numero , setNumero] = useState()
const [nom , setNom]=useState()
const [date_ , setDate]=useState()
const [nbr_emp , setNbr_emp]=useState()
const [budget , setBudget]=useState()
const dispatch =useDispatch()
const services= useSelector(state=>state.service)
useEffect(_=>{
    setNom(services.service.nom)
    setDate(services.service.date)
    setNbr_emp(services.service.nbr_emp)
    setNumero(services.service.numero)
    setBudget(services.service.budget)
},[services.service])
const handelsup=(srvc)=>{
    const has_employer = services.services.find(ele=>ele.numero==srvc.numero && srvc.nbr_emp>0) 
    if(has_employer){
        alert("this service has employer can not delete it ")
    }else{
        dispatch(supprimerService(srvc.numero))
    }
}

  return (
    <>
        <form onSubmit={e=>e.preventDefault()}>
            <input onChange={e=>setNom(e.target.value)}  value={nom} placeholder='nom'  type="text" />
            <input onChange={e=>setDate(e.target.value)}  value={date_} placeholder='date de creation'  type="date" />
            <input onChange={e=>setBudget(e.target.value)}  value={budget} placeholder='budget'  type="number" />
            <button onClick={()=>dispatch(ajouterService({numero:Date.now(),nom,date:date_,nbr_emp:0 , budget}))} >Ajouter Service</button>
            <button onClick={()=>dispatch(modiferService({numero,nom,date:date_,nbr_emp,budget}))} >Modifier</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>nom</th>
                    <th>date de creation</th>
                    <th>Nombre d'employer</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                {services.services.map((ele,i) =>
                <tr>
                    <td>{ele.nom}</td>
                    <td>{ele.date}</td>
                    <td>{ele.nbr_emp}</td>
                    <td>{ele.budget}</td>
                    <td>
                        <button onClick={_=>dispatch(editerService(ele.numero))} >Editer</button>
                        <button onClick={_=>handelsup(ele)} >Supprimer</button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
      
    </>
  )
}

export default Services
