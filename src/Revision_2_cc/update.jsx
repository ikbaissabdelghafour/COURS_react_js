import React, { useEffect , useState } from 'react';

function Update({ object, onupdate }) {  
  const [id, setId] = useState(object.id);
  const [name, setName] = useState(object.name);
  const [age, setAge] = useState(object.age);
  const [role, setRole] = useState(object.role);
  const [location, setLocation] = useState(object.location);
  const [email, setEmail] = useState(object.email);
  const [visbility, setVisbility] = useState("none");
//   const [visibility ]
useEffect(
    ()=>{
        setId(object.id)
        setName(object.name)
        setAge(object.age)
        setRole(object.role)
        setLocation(object.location)
        setEmail(object.email)
        if(object.id){
            setVisbility('block')
        }
    }
   , [object.id,object.name,object.age,object.role,object.location,object.email]
)

  return (
    <div style={{display:visbility}}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="id1">Id</label>
        <input onChange={e=>setId(e.target.value)}  value={id} id="id1" type="number" />
        
        <label htmlFor="id2">Name</label>
        <input onChange={e=>setName(e.target.value)}  value={name} id="id2" type="text" />
        
        <label htmlFor="id3">Age</label>
        <input onChange={e=>setAge(e.target.value)}  value={age} id="id3" type="number" />
        
        <label htmlFor="id4">Role</label>
        <input onChange={e=>setRole(e.target.value)}  value={role} id="id4" type="text" />
        
        <label htmlFor="id5">Location</label>
        <input onChange={e=>setLocation(e.target.value)}  value={location} id="id5" type="text" />
        
        <label htmlFor="id6">Email</label>
        <input onChange={e=>setEmail(e.target.value)}  value={email} id="id6" type="text" />
        
        <button type="button" onClick={()=>{onupdate({id:id,name:name,age:age,role:role,location:location,email:email});
                                        setVisbility('none')
                                    }}>
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
