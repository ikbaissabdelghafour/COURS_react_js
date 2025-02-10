import React from 'react'
import Client from './Client'
import Command from './Command'
import Chiffredaffaire from './Chiffredaffaire'
import { BrowserRouter , Link ,Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function App() {
return (
    <>
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/chiffre">Chiffre</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/command">Commandes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Client />} />
                <Route path="/chiffre" element={<Chiffredaffaire />} />
                <Route path="/command" element={<Command />} />
            </Routes>
        </BrowserRouter>
    </>
)
}

export default App
