import React from 'react'
import Services from './Services'
import Employer from './Employer'
import { Provider } from 'react-redux'
import { store } from '../Redux/Store'

function App() {
  return (
    < >
    <Provider store={store}>
    <fieldset>
      <legend>Service </legend>
      <Services/>
    </fieldset>
    <fieldset>
      <legend>Emplyee </legend>
      <Employer/>
    </fieldset>
    </Provider>
    </>
  )
}

export default App
