import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { update } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Update(){
  const select_obj=useSelector(state=>state.single_item)
    const [obj,setObj]=useState({})
    const dispatch = useDispatch()
    const navigate =useNavigate()
    console.log(obj)
    useEffect(()=>{
      setObj(select_obj)
      if( Object.keys(select_obj).length===0 ){
        navigate("/")
      } 
    },[select_obj])
    const handelupdate = ()=>{
      if(obj.nom.trim()!="" && obj.prenom.trim()!="" ){
      dispatch(update(obj)) 
    };
      navigate('/') 
      }
    
  return (
    <>
        <form action=""   className='form-control' method="post" onSubmit={e=>e.preventDefault()} >
            <br /><input  className='form-control' type="text" onChange={(e)=>setObj({...obj , nom:e.target.value})} value={obj.nom} placeholder='nom' />
            <br /><input  className='form-control' type="text" onChange={(e)=>setObj({...obj , prenom:e.target.value})} value={obj.prenom} placeholder='prenom' />
            <button className="btn btn-success mt-3" onClick={handelupdate } >Update</button>
        
        </form> 
    </>
  )
}

export default Update
