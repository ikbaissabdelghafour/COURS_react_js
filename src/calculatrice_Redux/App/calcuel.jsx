import React, { useState } from 'react'
import { add , sos , div , prod } from '../Redux/Action'
import { useDispatch } from 'react-redux'
function Calcuel() {
    const dispatch = useDispatch()
    const [obj , setObj] = useState({})
  return (
    <>
     <form action="" onSubmit={e=>e.preventDefault()}>
        <input  onChange={(e=>setObj({...obj , zone1: e.target.value}))} type="text" placeholder='ZONE 1' />
        <button onClick={()=>dispatch(add(obj))} >+</button>
        <button onClick={()=>dispatch(sos(obj))} >-</button>
        <button onClick={()=>dispatch(prod(obj))} >x</button>
        <button onClick={()=>dispatch(div(obj))} >/</button>
        <input  onChange={(e=>setObj({...obj , zone2:e.target.value}))} type="text" placeholder='ZONE 2' />
    </form> 
    </>
  )
}

export default Calcuel
