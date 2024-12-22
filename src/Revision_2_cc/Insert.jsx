import React, { useState , useRef } from 'react'

function Insert({insert}) {
    const [id,setId]=useState();
    const [name,setName]=useState();
    const [role,setRole]=useState();
    const [age,setAge]=useState();
    const [email,setEmail]=useState();
    const [location,setLocation]=useState();
//     const id    =useRef('')
//     const name    =useRef('')
//     const role    =useRef('')
//     const age   =useRef('')
//     const email   =useRef('')
//     const location    =useRef('')
//     const [visibility, setVisibility] = useState('none')

//   const handler = () =>{
//       const personne = {
//     id :        id.current.value ,
//     name :      id.current.value ,
//     role :      id.current.value ,
//     age :       id.current.value ,
//     email :     id.current.value ,
//     location :  id.current.value ,
//   }
// id.current.value=''
// id.current.value=''
// id.current.value=''
// id.current.value=''
// id.current.value=''
// id.current.value=''
  }





    const visibility__ = ( )=>{
        if(visibility=="none"){
            setVisibility("block")
        }else{
            setVisibility("none")
        }
    }
  return (<>
    <button onClick={visibility__} > Add Your Pepole </button>
    <div style={{display:visibility}}>
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="id1">Id</label>
      <input ref={id}  id="id1" type="number" />
      
      <label htmlFor="id2">Name</label>
      <input ref={name}  id="id2" type="text" />
      
      <label htmlFor="id3">Age</label>
      <input ref={age}  id="id3" type="number" />
      
      <label htmlFor="id4">Role</label>
      <input ref={role}  id="id4" type="text" />
      
      <label htmlFor="id5">Location</label>
      <input ref={location}  id="id5" type="text" />
      
      <label htmlFor="id6">Email</label>
      <input ref={email}  id="id6" type="text" />

      <button type="button" onClick={()=>{insert({id:id,name:name,age:age,role:role,location:location,email:email})}}>
        Add
      </button>
    </form>
  </div>
  </>
  )
}

export default Insert
