import React, { useState } from 'react'
import Display from './display'
import Creat from './creat'
import Edite from './edite'
function App() {
    const list=[
        {id:1,nom:"ikbaiss",prenom:"abdelghafour"},
        {id:2,nom:"elkassmi",prenom:"Hamza"},
        {id:3,nom:"ouadi",prenom:"mouad"}
    ]
    const [data,setData]=useState(list)
    const get_delete_id=(id)=>(setData(data.filter((ele)=>!(ele.id===id))))
    const ajouter=(newobj)=>(data.find(ele=>ele.id!==newobj.id) && setData([...data,newobj]))
    
    return (
        <>
        <fieldset>
            <legend>Insertion</legend>
            <Creat new_object={ajouter}/>
        </fieldset>
        <fieldset>
            <legend>Display</legend>
            <Display table={data} ondelete={get_delete_id} />
        </fieldset>
        <fieldset>
            <legend>Editer</legend>
            <Edite />
        </fieldset>
        </>

        
    )
}

export default App
