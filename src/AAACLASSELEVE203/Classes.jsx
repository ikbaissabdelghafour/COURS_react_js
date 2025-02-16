import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {ajouterclasse,supprimerclasse,editerclasse,modifierclasse} from './Actions'

function Classes() {
const [nbplaces,setNbplaces]=useState()
    const[nom,setNom]=useState()
    const[dateCreation,setDatecreation]=useState()
    const[id,setId]=useState()
  const[nbeleves,setNbeleves]=useState()
const dispatch = useDispatch();
const classes=useSelector(state=>state.classe.classes)
const clas=useSelector(state=>state.classe.clas)
const eleves=useSelector(state=>state.eleve.eleves)
useEffect(() => {
  setId(clas.id)
  setNom(clas.nom)
  setDatecreation(clas.dateCreation)
  setNbeleves(clas.nbeleves)
}, [clas])
const suppclass=(numeroclasse)=>{
    const listeleves = eleves.filter((ele)=>ele.idclass==numeroclasse)
    if(listeleves.length!=0){
        alert('sup  impossible elle contient des eleves ! ')
    }else{
        dispatch(supprimerclasse(numeroclasse))
    }
}
  return (
    <>
<form onSubmit={(e)=>e.preventDefault()}>

    <label>Nom</label>
    <input required type="text"  value={nom}  onChange={(e)=>setNom(e.target.value)}/>
    <label>dateCreation</label>
    <input required type="date"  value={dateCreation}  onChange={(e)=>setDatecreation(e.target.value)}/>
<label>nbplaces disponible</label>
<input type="number" value={nbplaces} onChange={e=>setNbplaces(e.target.value)} />
<button onClick={()=>{nom&&dateCreation&&dispatch(ajouterclasse({id:Date.now(),nom,dateCreation,nbeleves:0,nbplaces}))}}>Ajouter</button>
<button onClick={()=>nom&&dateCreation&&dispatch(modifierclasse({id,nom,dateCreation,nbeleves}))}>Modifier</button>

</form>
<table>
    <thead>
        <tr>
        <th>Nom</th>
        <th>Date</th>
        <th>Nb Eleves</th>
        <th>Nb Places</th>
        <th>supprimer</th><th>Editer</th>
        </tr>
    </thead>
    <tbody>
        {
            classes.map(el=>
            <tr key={el.id}>
                <td>{el.nom}</td> 
                <td>{el.dateCreation}</td>
                <td align='center'>{el.nbeleves}</td>
                <td align='center'>{el.nbplaces}</td>
             
            <td><button onClick={()=>suppclass(el.id)}>Supprimer</button></td>
            <td><button onClick={()=>dispatch(editerclasse(el.id))}>Editer</button></td>
            </tr>)
        }
    </tbody>
</table>
    </>
  )
}

export default Classes