import React from 'react'
import Classes from './Classes'
import Eleves from './Eleves'
import {Provider} from 'react-redux'
import {store} from './Store'
function App() {
  return (
    
    <>
    <Provider store={store}>
      <fieldset>
        <legend>Gestion de classes</legend>
        <Classes/>
    </fieldset>
    <fieldset>
        <legend>Gestion des Elelves</legend>
        <Eleves/>
    </fieldset>  
    </Provider>
    
    </>
  )
}

export default App