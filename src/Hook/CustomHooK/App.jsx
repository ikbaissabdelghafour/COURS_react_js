import React from 'react'
import useCutom from './useCustom'

function App() {
    // const [a] = useCutom("https://jsonplaceholder.typicode.com/todos") 
    const a = useCutom("https://api.exchangeratesapi.io/latest") 
  return (
    <>
    {a.map((ele,i)=><li> {ele.error.type  }</li>  )}
    
    </>
  )
}

export default App
