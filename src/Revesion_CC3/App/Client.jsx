import React, { useEffect, useState } from 'react';
import { INITIALEVALUE ,deletecli,ADDCLI,updatecli,editcli, addcli} from '../Redux/Action';
import {useDispatch , useSelector} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
export default function Client(){

const dispatch = useDispatch();
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(res=>dispatch(INITIALEVALUE(res)))
},[])
const clients = useSelector(state=>state.clients)
const commandes= useSelector(state=>state.commandes)
const [id, setid] = useState(0)
const [userId, setuserid] = useState('')
const [lastvalue, setLastvalue]=useState([])
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [affich,setAffich]=useState("none")
const [categore , setCategorie] = useState('0')
// -----------------Action for edit commandes-----------------
useEffect(() => {
    setid(clients.show.id)
    setuserid(clients.show.userId)
    setTitle(clients.show.title)
    setBody(clients.show.body)
},[clients.show])
// -----------------Action for Ctegores-----------------
useEffect(() => {
if(categore=="0"){
    setLastvalue(clients.table)
}else{
    setLastvalue(clients.table.filter(ele=>ele.userId==categore))
}
},[categore,clients.table])
// -----------------Action for edit commandes-----------------
const handeledit = (id)=>{
    dispatch(editcli(id))
    setAffich("inline")
}
// -----------------Action for update commandes-----------------
const handupdate = ()=>{
dispatch(updatecli({userId:userId,id:id,title:title,body:body}))
setAffich("none")
setuserid('')
setTitle('')
setBody('')
setid()
}
// -----------------Action for delete commandes-----------------
const handedelete = (id)=>{
    const detect = commandes.commande.find((ele)=>(ele.client==id))
    if(detect.length==0){
        dispatch(deletecli(id))
    }else{        
    }
}
return(
<>
<form onSubmit={e=>e.preventDefault()} className="mb-3">
    <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input type="number" className="form-control" id="userId" value={userId} onChange={e=>setuserid(e.target.value)} />
    </div>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" value={title} onChange={e=>setTitle(e.target.value)} />
    </div>
    <div className="mb-3">
        <label htmlFor="body" className="form-label">Body</label>
        <input type="text" className="form-control" id="body" value={body} onChange={e=>setBody(e.target.value)} />
    </div>
    <button className="btn btn-primary me-2" onClick={()=>dispatch(addcli({userId,id:Date.now(),title, body}))}>Ajouter</button>
    <button className="btn btn-secondary" onClick={handupdate} style={{ display:affich }}>Update</button>
</form>
<div className="mb-3">
    <label htmlFor="categorie" className="form-label">Categorie</label>
    <select className="form-select" id="categorie" onChange={e=>setCategorie(e.target.value)}>
        <option value="">Selectioner un categore</option>
        <option value="0">Tout</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
</div>
<table className="table table-bordered">
    <thead>
        <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {lastvalue.map((ele, i) => (
            <tr key={i}>
                <td>{ele.userId}</td>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.body}</td>
                <td>
                    <button className="btn btn-danger me-2" onClick={() => handedelete(ele.id)}>Supprimer</button>
                    <button className="btn btn-warning" onClick={() => handeledit(ele.id)}>Edite</button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</>
)

}