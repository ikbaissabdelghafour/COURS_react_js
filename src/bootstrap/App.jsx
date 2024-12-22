import React, { useState } from 'react'
// import styled from 'styled-components'
import Afficher from './Afficher'
import Calculate from './Calculate'
import styled from 'styled-components'

const Btn = styled.button`
background-color:red;
with:100%;
padding:50px;

`
function App() {
  const [obj,setObj]=useState({});

  const clacule = (object)=>(
    setObj(object)
  )

  return (
    <>
   <Btn/>
   <Afficher display={obj}  />
   <Calculate envoyer={clacule} />
    </>
  )
}

export default App
