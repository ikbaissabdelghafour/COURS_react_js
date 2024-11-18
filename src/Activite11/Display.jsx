import React  from 'react'

function Display({table,onupdate,ondelete}) {
   
  return (
    <table align='center' border={1} cellSpacing={0} cellPadding={20} width={1000}>
    <thead>
  <tr align="center">
        <th>ID</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Editer</th>
        <th>Supprimer</th>
  </tr>
    </thead>
    <tbody>
        {table.map((ele=>
                <tr key={(ele.id)} align="center">
                   <td> {ele.id} </td>
                   <td> {ele.nom} </td>
                   <td> {ele.prenom} </td>
                   <td> <button onClick={()=>onupdate(ele.id)} >Editer</button> </td>
                   <td> <button onClick={(()=>ondelete(ele.id))} >Supprimer</button> </td>
               </tr>
        ))
        }
    </tbody>
</table>
  )
}

export default Display
