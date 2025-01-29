import React from 'react'
import { Provider } from 'react-redux'
import Display from './display'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {store} from"../Redux/Store"
import { BrowserRouter , Link, Route,Routes  } from 'react-router-dom'
import Show from './Show'
import Update from './Update'
import Error from './Error'
import Add from './Add'
const App = () => {
  return (
    <Provider store={store} >
        <BrowserRouter>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <Link class="btn btn-primary" to="/" role="button">App</Link>
        <Link class="btn btn-primary" to="/Add" role="button">Add</Link>
        </div>
    </nav>

            <Routes>
                <Route path="/" element={<Display/>}  />
                <Route path="/Show" element={ <Show/>} />
                <Route path="/Add" element={ <Add/>} />
                <Route path="/Update" element={ <Update/>} />
                <Route path="*" element={ <Error/>} />
            </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App
