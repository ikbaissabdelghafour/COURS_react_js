import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { modifiernbeleves,ajoutereleve,supprimereleve,editereleve,modifiereleve, filtrerclass} from './Actions'

function Eleves() {

    const[nom,setNom]=useState()
    const[prenom,setPrenom]=useState()
    const[id,setId]=useState()
    const[idclass,setIdclass]=useState()
const dispatch = useDispatch();
const eleves=useSelector(state=>state.eleve.eleves)
const eleves2=useSelector(state=>state.eleve.eleves2)

const elev=useSelector(state=>state.eleve.elv)
const classes=useSelector(state=>state.classe.classes)
useEffect(() => {
  setId(elev.id)
  setNom(elev.nom)
  setPrenom(elev.prenom)
  setIdclass(elev.idclass)
}, [elev])
const ajouter=()=>{
    const classe = classes.find(cl => cl.id == idclass);
    if (classe && classe.nbplaces > 0)
    {nom&&prenom&&dispatch(ajoutereleve({id:Date.now(),nom,prenom,idclass}))
   dispatch(modifiernbeleves(idclass,1))
}
   else {
    alert("Il n'y a pas de places disponibles dans cette classe.");
}
}
const supprimer=(eleve)=>{
   dispatch(supprimereleve(eleve.id))
   dispatch(modifiernbeleves(eleve.idclass,-1))
}
  return (
    <>
<form onSubmit={(e)=>e.preventDefault()}>

    <label>Nom</label>
    <input required type="text"  value={nom}  onChange={(e)=>setNom(e.target.value)}/>
    <label>Prenom</label>
    <input required type="text"  value={prenom}  onChange={(e)=>setPrenom(e.target.value)}/>
<label>Classe</label>
<select value={idclass} onChange={(e)=>setIdclass(e.target.value)}>
    <option value="">veuillez choisir une classe svp</option>
{
    classes.map(el=><option key={el.id} value={el.id}>{el.nom}</option>)
}
</select>

<button onClick={()=>ajouter()}>Ajouter</button>
<button onClick={()=>nom&&prenom&&dispatch(modifiereleve({id,nom,prenom,idclass}))}>Modifier</button>
<button onClick={()=>dispatch(filtrerclass(idclass))}>Filrer</button>

</form>
<table>
    <thead>
        <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>classe</th>
        <th>supprimer</th><th>Editer</th>
        </tr>
    </thead>
    <tbody>
        {
            eleves.map(el=>
            <tr key={el.id}>
                <td>{el.nom}</td> 
                <td>{el.prenom}</td>
                <td>{el.idclass}</td>
            <td><button onClick={()=>supprimer(el)}>Supprimer</button></td>
            <td><button onClick={()=>dispatch(editereleve(el.id))}>Editer</button></td>
            </tr>)
        }
    </tbody>
</table>
<hr/>
<h2>Filtre eleves  par classe choisie</h2>
<table>
    <thead>
        <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>classe</th>
        
        </tr>
    </thead>
    <tbody>
        {
            eleves2.map(el=>
            <tr key={el.id}>
                <td>{el.nom}</td> 
                <td>{el.prenom}</td>
                <td>{el.idclass}</td>
                   </tr>)
        }
    </tbody>
</table>
    </>
  )
}

export default Eleves