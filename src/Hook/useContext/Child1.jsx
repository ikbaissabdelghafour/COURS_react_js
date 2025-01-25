import React ,{useContext} from 'react'
import { Sourse } from './App'
function Child1() {
    const a = useContext(Sourse);
    return (
    <fieldset>
      <legend>Child 1</legend>
      {a.map(ele=><li>{ele} </li>)}
    </fieldset>
  )
}

export default Child1
