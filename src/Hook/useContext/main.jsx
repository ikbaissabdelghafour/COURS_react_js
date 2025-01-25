import React , {useContext}  from 'react'
import Child1 from './Child1'
import  {Sourse} from './App'
import Child2 from './Child2'
const Main = () => {
    const table = useContext(Sourse)
    return (
    <>
    {table.map((ele , id)=>(
        <li key={id}> {ele}</li>
    ))}
     <Child2/>
     <Child1/>
    </>
  )
}

export default Main
