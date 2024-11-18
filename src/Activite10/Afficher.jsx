import React  from 'react'

function Afficher({tableau,onedit,onsupprime}) {

  return (
    <table align="center" >
        <thead>
            <tr>
                <th>Numero</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Adress</th>
                <th>Suppression</th>
                <th>Edition</th>
            </tr>
        </thead>
        <tbody>
            {tableau.map((ele)=>
            <tr>
                <td>{ele.id}</td>
                <td>{ele.nom}</td>
                <td>{ele.prenom}</td>
                <td>{ele.adr}</td>
                <td><button onClick={()=>onedit(ele.id)}>Editer</button></td>
                <td><button onClick={()=>onsupprime(ele.id)}>Supprimer</button></td></tr>
            
            )}
        </tbody>
      
    </table>
  )
}

export default Afficher
