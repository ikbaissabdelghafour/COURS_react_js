import React from 'react'


function Afficher({display}) {
  return (
    <div>
      <h4>message</h4>
      <ol>
        <li>{display.zon1}</li>
        <li>{display.zon2}</li>
        <li>{display.result}</li>
        <li>{
        display.operation
          }</li>
      </ol>
    </div>
  )
}

export default Afficher
