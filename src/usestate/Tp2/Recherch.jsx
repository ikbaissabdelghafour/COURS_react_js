import React, { useState } from 'react'

function Recherch() {
    const [type,settype]=useState('');
  return (
    <div>
        <input type="text" value={type} onChange={(e)=>e.target.value} />
        
    </div>
  )
}

export default Recherch
