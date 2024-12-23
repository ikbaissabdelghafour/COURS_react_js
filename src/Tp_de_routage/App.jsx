import React from 'react'
import {BrowserRouter ,  Routes , Route} from "react-router-dom"  
import Clients from './Clients'
import Commands from './Commands'
import Details from './details'
import Produit from './Produit'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './Navbar'

function App() {
    const clients =[
        {id:1,nom:"ahmadi",prenom:"mohammed",commandes:[
        {id:100,date:"12/12/2012",total:4554},{id:101,date:"12/12/2012",total:6666},{id:102,date:"12/12/2012",total:9999}]},
        {id:11,nom:"ikbaiss",prenom:"Abdelghafour   ",commandes:[{id:1100,date:"12/12/2012",total:74554},
        {id:1101,date:"12/12/2012",total:76666},{id:1102,date:"12/12/2012",total:79999}]},]
        const details=[{ id:100,refproduit:1,qte:20},
            {id:100,refproduit:2,qte:200},
            { id:100,refproduit:4,qte:289},
            { id: 101,refproduit:1,qte:20},
            { id:1100,refproduit:1,qte:20},
            { id: 1100,refproduit:3,qte:22200},
            { id:1100,refproduit:2,qte:2289},
            { id: 1101,refproduit:4,qte:2220}]
        const
        produits=[
            {refproduit:1,description:"stylo",pu:2},
            {refproduit:2,description:"regle",pu:52},
            {refproduit:3,description:"stylo",pu:2},
            {refproduit:4,description:"gomme",pu:5}
            ]
        

  return (
    <>

        <BrowserRouter>
        <Navbar/>
            <Routes>
              <Route path="/" element={<Clients clients={clients} />} />
              <Route path="/Commands/:id" element={<Commands command = {clients}/>} />
              <Route path="/Commands/details/:id" element={<Details details={details}/>} />
              <Route path="/Commands/product/:ref" element={<Produit products={produits}  />}  />
            </Routes>
            
        </BrowserRouter>
    </>
  )
}

export default App
