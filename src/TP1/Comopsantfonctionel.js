import React from 'react'
function Comopsantfonctionel(props) {
  return (
    <li key={props.id} style={{color : props.color}}>
      {props.cont}
    </li>
  )
}

export default Comopsantfonctionel
