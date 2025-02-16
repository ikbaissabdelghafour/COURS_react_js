import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../Redux/Store'
import Classes from './Classes'
import Eleve from './Eleve'

function App() {
  return (
    <Provider store={store}>
      <Classes/>
      <Eleve/>
    </Provider>
  )
}

export default App
