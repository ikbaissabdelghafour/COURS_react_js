import React from 'react'
import { Provider } from 'react-redux'
import Clients from './Clients'
import Commandes from './Commandes'
import {store} from './Store'
function App() {
  return (
    <Provider store={store}>
    <fieldset>
        <legend> Gestion de client </legend>
        <Clients/>
    </fieldset>
    <fieldset>
        <legend> Gestion des Commandes </legend>
        <Commandes/>
    </fieldset>
    </Provider>
  )
}

export default App