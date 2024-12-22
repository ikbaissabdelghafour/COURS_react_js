import React ,{useState} from 'react'

function Personne2({messageP2,take_mess1,messagesp1}) {
    const [message,setMessage]=useState('')
    return (
    <>
    <form action="" onSubmit={e=>e.preventDefault()}>
    <label htmlFor="mesassge">Message de presonne 1 vers personne 2 </label>
      <input id='mesassge' type="text" onChange={e=>setMessage(e.target.value)} />
      <button onClick={()=>messageP2(message)} >Envoye a personne 2 </button>
      <h2>la dernier message de perssone 1 est : {take_mess1} </h2>
      <ul>
        {
          messagesp1.map(ele=>
            <li>les message envoyer par P1 est :{ele}</li>

          )
        }
      </ul>
    </form>

      
    </>
  )
}

export default Personne2
