import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { create } from '../Redux/Action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Add(){
    const [obj,setObj]=useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handeladd=()=>{
      if(typeof(obj.nom)!=undefined && typeof(obj.prenom)!=undefined ){
        dispatch(create(obj));
      }else{
        alert("null")
      }
      navigate("/");
    }
    console.log(obj)
  return (
    <>
        <form action="" className='form-control' method="post" onSubmit={e=>e.preventDefault()}>
            <br /><input className='form-control ' type="text" onChange={(e)=>(setObj({...obj, nom: e.target.value}))}  placeholder='nom' />
            <br /><input className='form-control ' type="text" onChange={(e)=>(setObj({...obj, prenom: e.target.value}))}  placeholder='prenom' /><br/>
            <button className='btn btn-success' onClick={handeladd}   >Add</button>
        </form> 
    </>
  )
}

export default Add
