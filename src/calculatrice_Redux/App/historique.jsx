import React from 'react'
import { useSelector } from 'react-redux'

function Historique() {
  const data = useSelector(state=>state)
  console.log(data)
  return (
    <ul>
      <h1>{data.historique.map((ele)=>{
        if(Number.isFinite(+ele.zone1) && Number.isFinite(+ele.zone2) ){
          return <li>{ele.zone1} {ele.operation} {ele.zone2}  {!isNaN(ele.result) || ele.result=="ERROR"  ? <span> =  {ele.result}</span> :null}</li>
        }else{
          return null
        }
      }
      
      )}</h1>
    </ul>
  )
}

export default Historique
