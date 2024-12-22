import React ,{useRef, useState}from 'react'

function Calculate({envoyer}) {
    const [zon1  ,  setZon1 ]  = useState(0)
    const [zon2  ,  setZon2 ]  = useState(0)
    const [result ,  setResult ] = useState(0)
    const [operation,setOperation]=useState('')
    // ------------------------------------------------

return(
    <form onSubmit={e=>e.preventDefault()}>

        <fieldset>
            <legend>1 Zone</legend>
            <input onChange={e=>setZon1(e.target.value)} type="number"  />
       no </fieldset>
        <fieldset>
            <legend> 2 Zone</legend>
            <input onChange={e=>setZon2(e.target.value)} type="number"  />
        </fieldset>
        <fieldset>
            <legend> Operation</legend>
            <button onClick={()=>{setOperation('*') ; setResult(parseFloat(zon1)*parseFloat(zon2))}} >*</button>
            <button onClick={()=>{setOperation('/') ; setResult(parseFloat(zon1)/parseFloat(zon2))}} >/</button>
            <button onClick={()=>{setOperation('+') ; setResult(parseFloat(zon1)+parseFloat(zon2))}} >+</button>
            <button onClick={()=>{setOperation('-') ; setResult(parseFloat(zon1)-parseFloat(zon2))}} >-</button>
        </fieldset>
        <button onClick={()=>envoyer({zon1:zon1,zon2:zon2,result:result,operation:operation})} >Calculer</button>

    </form>
)
    
}

export default Calculate
