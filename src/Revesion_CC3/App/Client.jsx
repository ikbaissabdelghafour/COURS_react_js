import React, { useEffect, useState } from 'react';
import { INITIALEVALUE ,deletecli,ADDCLI,updatecli,editcli, addcli} from '../Redux/Action';
import {useDispatch , useSelector} from 'react-redux';

export default function Client(){

const dispatch = useDispatch();
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(res=>dispatch(INITIALEVALUE(res)))
},[])
const clients = useSelector(state=>state)
const [id, setid] = useState(0)
const [userId, setuserid] = useState('')
const [obj, setobj] = useState({})
const [lastvalue, setLastvalue]=useState([])
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [affich,setAffich]=useState("none")
const [categore , setCategorie] = useState('0')
useEffect(() => {
    setuserid(clients.show.userId)
    setTitle(clients.show.title)
    setBody(clients.show.body)
},[clients.show])
useEffect(() => {
if(categore=="0"){
    setLastvalue(clients.table)
}else{
    setLastvalue(clients.table.filter(ele=>ele.userId==categore))
}
},[categore])
const handeledit = (id)=>{
    dispatch(editcli(id))
    setAffich("inline")
    setobj(clients.show)
    setid(clients.show.id)
    setuserid(clients.show.userId)
    setTitle(clients.show.title)
    setBody(clients.show.body)
}
const handupdate = ()=>{
dispatch(updatecli({userId:userId,id:id,title:title,body:body}))
setAffich("none")
setuserid('')
setTitle('')
setBody('')
setid()
}
return(
<>
<form onSubmit={e=>e.preventDefault()}>
      <input type="number" value={userId} onChange={e=>setuserid(e.target.value)} />
      <input type="text"   value={title} onChange={e=>setTitle(e.target.value)} />
      <input type="text"   value={body} onChange={e=>setBody(e.target.value)} />
      <button onClick={()=>dispatch(addcli({userId,id:Date.now(),title, body}))} > Ajouter </button>
      <button onClick={handupdate} style={{ display:affich }}>Update</button>
    </form>
<select name="" id="" onChange={e=>setCategorie(e.target.value)}>
  <option value="">selectioner un categore</option>
    <option value="0">Tout</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>

    <table border={1}>
        <tr>
            <th>userid</th>
            <th>id</th>
            <th>title</th>
            <th>Body</th>
            <th>Action  </th>
        </tr>
        { lastvalue.map((ele,i)=> <tr key={i}>
            <th>{ele.userId}</th>
            <th>{ele.id}</th>
            <th>{ele.title}</th>
            <th>{ele.body}</th>
            <th> <button onClick={()=>dispatch(deletecli(ele.id))} >Supprimer</button> </th>
            <th> <button onClick={()=>handeledit(ele.id)} >Edite</button> </th>
            </tr>
        )}
        
    </table>
        </>
)

}