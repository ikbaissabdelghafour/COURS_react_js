import React ,{useState}from 'react'
import Update from './update'
import Display from './Display'
import Insert from './Insert'
import styled from 'styled-components'
import "bootstrap/dist/css/bootstrap.min.css" 

const Buttin = styled.input
`
background-color:red;
`

function APP() {
    const data = [
        { id: 1, name: "Abdelghafour", age: 25, role: "Developer", location: "Casablanca", email: "abdelghafour@example.com" },
        { id: 2, name: "Salma", age: 22, role: "Manager", location: "Marrakech", email: "salma@example.com" },
        { id: 4, name: "Hamza", age: 28, role: "Developer", location: "Tangier", email: "hamza@example.com" },
        { id: 5, name: "Mouad", age: 27, role: "Tester", location: "Agadir", email: "mouad@example.com" },
        { id: 6, name: "Yassine", age: 24, role: "Support", location: "Fes", email: "yassine@example.com" },
              ];
    const [table, setTable]=useState(data)
    const [Obj, setObj]=useState({})
    // take object for update it       
    const Upd_id = (id) => {setObj(table.find((ele=>ele.id===id)))}   
    // suppression      
    const sup_id =(id)=>{setTable(table.filter((el)=> !(el.id===id)))}
    // update      
    const update_table = (obj)=>{
        !table.find(ele=>ele.id==obj.id) && setTable([...table.filter((ele)=>ele.id!==Obj.id) , obj])}
    // Ajouter      
    const ajouter=(add_obj)=>{!table.find(ele=>ele.id==add_obj.id) && setTable([...table,add_obj])}
  return (
    <>

<fieldset >
<legend>Update My Best Persone</legend>
        <Update object={Obj} onupdate={update_table} />
</fieldset>
<fieldset>
<legend>Insert My Best Persone</legend>
        <Insert insert={ajouter}/>
</fieldset>
<fieldset>
<legend>Display My Best Persone</legend>
<Buttin/>
        <Display  data={table} edite={Upd_id} delet={sup_id}/>
</fieldset>
    </>
  )
}

export default APP
