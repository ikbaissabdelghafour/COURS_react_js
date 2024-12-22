import React from "react";
import { Route , Routes , BrowserRouter  , Link  } from "react-router-dom";
import {About , Home , Acuel} from './Route'



export default function App(){
    
    return(
            <>
        <BrowserRouter>
        <ul>
            <li><Link to="/" >Acuel</Link> </li>
            <li><Link to="/About" >About</Link> </li>
            <li><Link to="/Home" >Home</Link> </li>
        </ul>
        <Routes>
            <Route path={'/About'} element={<About />} />
            <Route path={'/Home'} element={<Home />} />
            <Route path={'/'} element={<Acuel />} />
        </Routes>
        </BrowserRouter>    
    </>
    )

}









