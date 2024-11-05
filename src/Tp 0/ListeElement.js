import React from 'react'
var elems =[ "abdelghaour" ,"hamza","SALMA","MOHAMED","saad" , "asma","mouad"]
function ListeElement() {
  return (
    <ul>
        {elems.map((elem,index)=>
        <li  key={index}>{elem}</li>
        )}
    </ul>
  )
}

export default ListeElement
