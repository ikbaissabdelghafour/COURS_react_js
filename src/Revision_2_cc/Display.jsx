import React from 'react'

function Display({data , edite , delet}) {
  return (
    <>
    <table border={1} class="table-success">
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>role</th>
            <th>location</th>
            <th>email</th>
            <th>Action</th>
        </tr>    
        </thead>
        <tbody>
            {data.map(
                ele=>(
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.age}</td>
                        <td>{ele.role}</td>
                        <td>{ele.location}</td>
                        <td>{ele.email}</td>
                        <td>
                            <button onClick={()=>edite(ele.id)} >Editer</button>
                            <button onClick={()=>delet(ele.id)} >Delete</button>
                        </td>
                </tr>   
                )

            )}
        </tbody>
    </table> 
    </>
  )
}

export default Display
