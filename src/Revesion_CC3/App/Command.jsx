import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addcom,deletecom,editcom,updatecom } from '../Redux/Action'
function Command() {
    const clients= useSelector(state=>state.clients)
    const commandes=useSelector(state=>state.commandes)
    const dispatch=useDispatch();
    const [date,setDate]=useState('')
    const [total,setTotale]=useState(0)
    const [client, setClient]=useState('')
    const [numero, setNumero]=useState('')
    const [affich, setAffich]=useState('none')
    const [show,setShow]=useState({})
    console.log(commandes)
// -----------------Action for add commandes-----------------
    const handelajoute=()=>{
        dispatch(addcom({numero:Date.now() , date:date,total,client:client}))
        setClient('');
        setTotale(0);
        setDate('');
    }
    // -----------------Action for edit commandes-----------------
    useEffect(() => {  
        setClient(commandes.com.client)
        setTotale(commandes.com.total)
        setDate(commandes.com.date)
        setNumero(commandes.com.numero)
     }, [commandes.com])
     // -----------------Action for update commandes-----------------
     const handelupdate=()=>{
        dispatch(updatecom({numero:numero,date,total,client}))
        setClient('');
        setTotale(0);
        setDate('');
        setAffich('none')
     }
  return (
        <>
    <form onSubmit={e=>e.preventDefault()}>
        <input type="date"   value={date}   onChange={e=>setDate(e.target.value)}id="" placeholder='' />
        <input type="number" min={0} value={total} onChange={e=>setTotale(e.target.value)}id="" placeholder='' />
        <select onChange={e=>setClient(e.target.value)} value={client} >
    <option value="">selection un client</option>
     {clients.table.map(ele=> <option value={ele.id} key={ele.id}> {ele.id}</option>)}
        </select>
        <button onClick={handelajoute} >Ajouter </button>
        <button onClick={handelupdate} style={{ display:affich }} >UPDATE </button>
    </form>



    <table border={1} >
        <thead >
            <tr>
                <th>numero</th>
                <th>date</th>
                <th>total</th>
                <th>client</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
            commandes.commande.map((ele,i)=>
            <tr key={i} >
                <td>{ele.numero}</td>
                <td>{ele.date}</td>
                <td>{ele.total}</td>
                <td>{ele.client}</td>
                <td>
                    <button onClick={()=>{dispatch(editcom(ele.numero)) ; setAffich("inline")}} >Edit</button>
                    <button onClick={()=>dispatch(deletecom(ele.numero))} >Delete</button>
                </td>
            </tr>
            )
        }
        </tbody>
    </table>
    </>
  )
}

export default Command
