import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../Redux/Store'
import Calcuel from './calcuel'
import Historique from './historique'
import Result from './Result'
function App() {
  return (
    <Provider store={store}>
        <Calcuel/>
        <Historique/>
        <Result/>
    </Provider>
    
  )
}

export default App
