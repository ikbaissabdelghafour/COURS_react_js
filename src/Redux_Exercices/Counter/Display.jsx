import React, { useState } from 'react'
import {  useSelector , useDispatch } from 'react-redux'
import { add , sos , mise , step } from './Action' 


const Display = () => {
    const data = useSelector(state=>state)
    const dispatch = useDispatch()
    const [stp ,setStp]= useState(1)
    console.log(stp)
  return (
    <>
        <p>Action : {data.act}</p>
        <p>Le pas actuel est : {data.stp} </p>
        <input type="number" placeholder='Chnager le pas ' onChange={e=>setStp( e.target.value == null ? 1: e.target.value )} />
        <button onClick={_=>dispatch(step(+stp))} >Chnager le pas</button><br />
        <button onClick={_=>dispatch(add())} >+</button>
        <button onClick={_=>dispatch(sos())} >-</button><br />
        <button onClick={_=>dispatch(mise())} >Mise a zero</button><br />
        <p>Value : {data.Valeur}</p>
        <p>Les nombre des operations  : {data.count}</p>
        <p>Les nombre Incrementation  : {data.inc}</p>
        <p>Les nombre Decrementation  : {data.dec}</p>

    </>
  )
}

export default Display
