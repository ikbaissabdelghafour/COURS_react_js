import React, { useState } from 'react'

function Personne1({messageP1,take_mess2,messagesp2}) {
  const [message,setMessage]=useState('')
  return (
    <>
    <form action="" onSubmit={e=>e.preventDefault()}>
    <label htmlFor="mesassge">Message de presonne 1 vers personne 2 </label>
      <input id='mesassge' type="text" onChange={e=>setMessage(e.target.value)} />
      <button onClick={()=>messageP1(message)} >Envoye a personne 2 </button>
      <h2>la dernier message de perssone 1 est : {take_mess2} </h2>
      <ul>
        {
          messagesp2.map(ele=>
            <li>les message envoyer par P2 est :{ele}</li>

          )
        }
      </ul>
      <table>
        <tr>
          <th>Id</th>
          <th></th>
          <th>message</th>
        </tr>
      </table>

    </form>
      
    </>
  )
}

export default Personne1
