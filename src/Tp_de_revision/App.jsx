import React from 'react'
import Na3na3 from './Na3na3'

function App() {

const kissan={
    object_kass:{id:1,nom:"walid",prenom:"salim"},
    table_kass:["ikbaisson" , "abdo" , 20]
    }
const brad="brad n atay seba3"
  return (
    <>
      <Na3na3   kissan={kissan} var_brad={brad}  />
      
    </>
  )
}

export default App
