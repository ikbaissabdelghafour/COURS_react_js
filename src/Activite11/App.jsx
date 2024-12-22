import React, { useState } from 'react'
import Display from './display'
import Creat from './Creat'
import Edite from './edite'
function App() {
    const list=[
        {id:1,nom:"ikbaiss",prenom:"abdelghafour"},
        {id:2,nom:"elkassmi",prenom:"Hamza"},
        {id:3,nom:"ouadi",prenom:"mouad"}
    ]
    const [data,setData]=useState(list)
    const [for_update,setFor_udapte]=useState({})
    const get_delete_id=(id)=>(setData(data.filter((ele)=>!(ele.id===id))))

    const ajouter=(newobj)=>(
        !data.find(ele=>ele.id===newobj.id) && setData([...data,newobj]))
    const update_obje=(id_update)=>(setFor_udapte(data.find(ele=>ele.id===id_update)))
    const new_object_updat=(update_object)=>(
        update_object.id!=null &&
         update_object.nom!=null && 
         update_object.prenom!=null && 
         setData([...data.filter(ele=>!(ele.id===for_update.id)),update_object]))   
        return (
        <>
        <fieldset>
            <legend>Insertion</legend>
            <Creat new_object={ajouter}/>
        </fieldset>
        <fieldset>
            <legend>Display</legend>
            <Display table={data} onupdate={update_obje} ondelete={get_delete_id} />
        </fieldset>
        <fieldset>
            <legend>Editer</legend>
            <Edite  obj_edit={new_object_updat}  current_obj={for_update}  />
        </fieldset>
        </>

        
    )
}

export default App
