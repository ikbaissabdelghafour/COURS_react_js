import React  from 'react'
import { Provider } from 'react-redux'
import { store } from './Store'
import Display from './Display'
const App = () => {
  return (
    <Provider store={store}> 
        <Display/>
    </Provider>
  )
}

export default App
