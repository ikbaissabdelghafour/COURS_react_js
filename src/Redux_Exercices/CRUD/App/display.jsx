import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {  update ,  delet, show } from '../Redux/Action'
import { Link } from 'react-router-dom'
function Display() {
  const data = useSelector(state=>state)
  const dispatch = useDispatch()
  return (
    <>
    <table border={1} className='table table-striped table-hover'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      
        {
        (data.iteams.map((ele)=>(
          <tr>
            <td>{ele.id} </td>
            <td>{ele.nom} </td>
            <td>{ele.prenom} </td>
            <td className='col-6'> 
              
              <Link className='btn btn-primary mx-3'onClick={()=>{dispatch(show(ele.id))}}  to="/Show" >Show</Link>
              <Link className='btn btn-warning mx-3' onClick={()=>{dispatch(show(ele.id))}}  to="/Update">Update</Link>
              <button className='btn btn-danger mx-3' onClick={()=>(dispatch(delet(ele.id)))} >delete</button>
          </td>
          </tr>
        )))}
      </tbody>

    </table>
      
    </>
  )
}

export default Display
