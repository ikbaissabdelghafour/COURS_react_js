import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { delet } from '../Redux/Action'
function Show() {
    // const [new_ , setNew_]=useState([]) 
    const data= useSelector(state=>state)
    console.log(data.single_item)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if(Object.keys(data.single_item).length==0){
            navigate("/");
        }},[data.single_item]
    )
    return (
    <>
    <table border={1} className='table table-bordred table-dark table-striped'>
        <thead>
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th colSpan={2} align='center'>Action</th>
            </tr>
        </thead>
        <tbody>  
                <tr>
                    <td> {data.single_item.id}</td>
                    <td> {data.single_item.nom}</td>
                    <td> {data.single_item.prenom}</td>
                    <td> <Link className='btn btn-outline-success' to={`/Update`} >Update</Link></td>
                    <td> <Link className='btn btn-danger' onClick={()=>{dispatch(delet(data.single_item.id))}}  to="/" >Delete</Link></td>
                </tr>
           
        </tbody>
    </table>
      
    </>
  )
}

export default Show
