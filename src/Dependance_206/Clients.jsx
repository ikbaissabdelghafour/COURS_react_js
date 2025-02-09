import React , {useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {ajouterclient , supprimerclient , modifierclient} from  './Actions'
function Clients() {
    const clients = useSelector(state=>state.client.clients)
    const commandes = useSelector(state=>state.commande.commandes)
    const dispatch = useDispatch();
    const [nom , setNom] =  useState('')
    const [prenom , setPrenom] =  useState('')
    const [adresse , setAdresse] =  useState('')
    const [id , setId] =  useState('')
    const [affiche,setAffiche]= useState(true)
    // editer client : pour obtenir les informations du client à modifier
    const editer = (numero)=>{
        const obj=clients.find((ele)=>ele.id==numero)
        if(obj){
            setNom(obj.nom)
            setPrenom(obj.prenom)
            setAdresse(obj.adresse)
            setId(obj.id)
            setAffiche(false)
        }
    }
    // supprimer client : pour supprimer un client
    const suppcli=(numeroclient)=>{
        const listcommande = commandes.filter((ele)=>ele.client==numeroclient)
        if(listcommande.length!=0){
            alert('can not delete this client ! ')
        }else{
            dispatch(supprimerclient(numeroclient))
        }
    }
  return (
    <>
    <form  onSubmit={e=>e.preventDefault()} >
        <label >Nom  </label>
        <input type="text" value={nom} onChange={e=>setNom(e.target.value)} />
        <label >Prenom  </label>
        <input type="text" value={prenom} onChange={e=>setPrenom(e.target.value)} />
        <label >Adresse  </label>
        <input type="text" value={adresse} onChange={e=>setAdresse(e.target.value)} />
        <button onClick={()=>dispatch(ajouterclient({id:Date.now(),nom:nom,prenom,adresse}))} > Ajouter  </button>
        <button disabled={affiche} onClick={()=>{dispatch(modifierclient({id,nom,prenom,adresse}));setAffiche(true);setNom();setPrenom("");setAdresse('')}} > Modifer  </button>
        
    </form>
    <table border={1}>
        <thead>
            <tr>
                <th>Nom</th>
                <th>prenom</th>
                <th>Adresse</th>
                <th>Supprimer</th>
                <th>Editer</th>
            </tr>
        </thead>
        <tbody>
            {clients.map(ele=>
                <tr key={ele.id} >
                    <td>{ele.nom} </td>
                    <td>{ele.prenom} </td>
                    <td>{ele.adresse} </td>
                    <td><button onClick={()=>suppcli(ele.id) } >Supprimer</button></td>
                    <td><button onClick={()=> editer(ele.id)} >Editer</button></td>
                
                </tr>
                )}
        </tbody>
    </table>
    </>
  )
}

export default Clients