import React , {useState,useEffect} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {ajoutercom , supprimerclient , modifierclient,editercommande, ajoutercommande, supprimercommande, modifiercommande} from  './Actions'
function Commandes() {
    const commandes = useSelector(state=>state.commande.commandes)
    const dispatch = useDispatch();
    const [datecde , setDatecde] =  useState()
    const [total , setTotal] =  useState()
    const [client , setClient] =  useState()
    const [id , setId] =  useState()
    const [affiche,setAffiche]= useState(true)
    const com=useSelector(state=>state.commande.com)
    const clients=useSelector(state=>state.client.clients)
    useEffect(() => {
        setDatecde(com.datecde)
        setTotal(com.total)
        setClient(com.client)
        setId(com.id)
        setAffiche(false)
    }, [com])


    
  return (
    <>
    <form  onSubmit={e=>e.preventDefault()} >
        <label >Date   </label>
        <input type="date" value={datecde} onChange={e=>setDatecde(e.target.value)} />
        <label >Total  </label>
        <input type="number" value={total} onChange={e=>setTotal(e.target.value)} />
        <label htmlFor=""> client</label>
        <select value={client} onChange={e=>setClient(e.target.value)}>
            <option value="">Veuillez choisir un client svp</option>
            {clients.map((ele)=>
            <option value={ele.id}  key={ele.id}>   {ele.nom} -- {ele.prenom} </option>
            )}
        </select>
        <button onClick={()=>dispatch(ajoutercommande({id:Date.now(),datecde,total,client}))} > Ajouter  </button>
        <button disabled={affiche} onClick={()=>{dispatch(modifiercommande({id,datecde,total,client}));setAffiche(true)}} > Modifer  </button>
        
    </form>
    <table border={1}>
        <thead>
            <tr>
                <th>Date</th>
                <th>Total</th>
                <th>Client</th>
                <th>Supprimer</th>
                <th>Editer</th>
            </tr>
        </thead>
        <tbody>
            {commandes.map(ele=>
                <tr key={ele.id} >
                    <td>{ele.datecde} </td>
                    <td>{ele.total} </td>
                    <td>{ele.client} </td>
                    <td><button onClick={()=>dispatch(supprimercommande(ele.id)) } >Supprimer</button></td>
                    <td><button onClick={()=> dispatch(editercommande(ele.id))} >Editer</button></td>
                </tr>
                )}
        </tbody>
    </table>
    </>
  )
}

export default Commandes