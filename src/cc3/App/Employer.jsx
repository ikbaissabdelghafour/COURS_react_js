import React ,{useState , useEffect} from 'react'
import { ajouterEmplyer,modiferEmployer,supprimerEmplyer,filterEmployer,EditerEmplyer,modife_budget , modifer_Nb_Employee } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'

function Employer() {
const [id , setId] = useState()
const [nom , setNom] = useState()
const [prenom , setPrenom] = useState()
const [adresse , setAdresse] = useState()
const [salaire , setSalaire] = useState()
const [service , setService] = useState()
const [filter_ , setFilter_] = useState()
const Employer = useSelector(state=>state.employer)
const Services = useSelector(state=>state.service)
const dispatch = useDispatch()

const handeldata = (type) => { 
    const budget = Services.services.find(ele=>ele.numero==service);
    if(budget.budget<salaire){
        alert(`${salaire} > ${budget.budget}` )
    }else if(type="ajouter") {
        dispatch(ajouterEmplyer({id:Date.now() , nom , prenom , adresse , salaire , service}));
        dispatch(modifer_Nb_Employee(service,1))
        dispatch(modife_budget(service, -salaire))
    }else if(type="modifer"){
        dispatch(modiferEmployer({id, nom , prenom , adresse , salaire , service}))
    }
}
useEffect(()=>{
    setId(Employer.emp.id)
    setNom(Employer.emp.nom)
    setPrenom(Employer.emp.prenom)
    setAdresse(Employer.emp.adresse)
    setService(Employer.emp.service)
    setSalaire(Employer.emp.salaire)
},[Employer.emp])
console.log(filter_)
console.log(Employer)


  return (
    <>
    <form onSubmit={e=>e.preventDefault()}>
        <input  onChange={e=>setNom(e.target.value)}  value={nom} placeholder='nom' type="text" />
        <input  onChange={e=>setPrenom(e.target.value)}  value={prenom} placeholder='prenom' type="text" />
        <input  onChange={e=>setAdresse(e.target.value)}  value={adresse} placeholder='adresse' type="text" />
        <input  onChange={e=>setSalaire(e.target.value)}  value={salaire} placeholder='salaire' type="number" />
        <select onChange={e=>setService(e.target.value)}  value={service}>
            <option value="">select service type you want</option>
            {Services.services.map((ele,i)=>
            <option value={ele.numero} key={i}> {ele.nom} </option>
            )}
        </select>
        <button onClick={_=>handeldata("ajouter")} >Ajouter</button>
        <button onClick={_=>handeldata("modifer")} >Modifer</button>


    </form>
      <table  border={1}>
        <thead>
            <tr>
                <th>prenom</th>
                <th>nom</th>
                <th>adresse</th>
                <th>salaire</th>
                <th>Company</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {Employer.employer.map((ele,i)=>
            <tr key={i} >
                <td> {ele.id} </td>
                <td> {ele.nom} </td>
                <td> {ele.adresse} </td>
                <td> {ele.salaire} </td>
                <td> {ele.service} </td>
                <td> 
                <button onClick={_=>{dispatch(supprimerEmplyer(ele.id));dispatch(modife_budget(ele.service,  +ele.salaire));dispatch(modifer_Nb_Employee(service,-1))}} >Supprimer</button>
                <button onClick={_=>dispatch(EditerEmplyer(ele.id))} >Editer </button>

                </td>
            </tr>
            )}
        </tbody>
      </table>
      <select onChange={e=>{setFilter_(e.target.value)}}  value={filter_}  >
            <option value="">select service type you want</option>
            {Services.services.map((ele,i)=>
            <option value={ele.numero} key={i}> {ele.nom} </option>
            )}
    </select>  
    <button onClick={_=>dispatch(filterEmployer(filter_))} > Filter</button> 

      <table  border={1}>
        <thead>
            <tr>
                <th>prenom</th>
                <th>nom</th>
                <th>adresse</th>
                <th>salaire</th>
                <th>Company</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {Employer.employer2.map((ele,i)=>
            <tr key={i} >
                <td> {ele.id} </td>
                <td> {ele.nom} </td>
                <td> {ele.adresse} </td>
                <td> {ele.salaire} </td>
                <td> {ele.service} </td>
               

                
            </tr>
            )}
        </tbody>
      </table>
         </>
    
  )
}

export default Employer
