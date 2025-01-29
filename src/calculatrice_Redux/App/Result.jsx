import React from 'react'
import {useSelector} from "react-redux"
function Result() {
    const data = useSelector(state=>state)

  return (
    <div >
    {
    Number.isFinite(+data.calc.zone1) && Number.isFinite(+data.calc.zone2)?  <h1>{data.calc.zone1 || null} {data.calc.operation || null} {data.calc.zone2} {!isNaN(data.calc.result)   ? <span> = {data.calc.result}</span> :null}   </h1>
      :null
  }
    </div>
  )
}

export default Result
