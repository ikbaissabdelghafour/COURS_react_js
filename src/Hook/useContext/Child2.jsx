import React from 'react'
import { Sourse } from './App'

function Child2() {
  return (
    <Sourse.Consumer>
        {(e)=>{return(
            <fieldset>
                <legend>
                    Child2
                </legend>
            {e.map((ele)=>
                <li>{ele}</li>
        )}
            </fieldset>
        )
        }}
        
    </Sourse.Consumer>
  )
}

export default Child2
