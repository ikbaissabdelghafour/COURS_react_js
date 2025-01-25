import React from 'react'
import Na3na3 from './Na3na3'

function App() {

const kissan={
    object_kass:{id:1,nom:"sabiri",prenom:"ahmadi"},
    table_kass:["ahmadi" , "sabiri" , 20]
    }
const brad="brad n atay seba3"
  return (
    <>
      <Na3na3   kissan={kissan} var_brad={brad}  />
      
    </>
  )
}

export default App
