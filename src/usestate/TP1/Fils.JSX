import React,{useState} from 'react'
 
function Fils(props) {
    const[messageP1,setmessageP1]=useState("")
    const[messageP2,setmessageP2]=useState("")

  return (<>
        <h1>Composant Fils</h1>
        <h1>le message envoyé du pere est :{props.messagepere}</h1>
    <form onSubmit={(e)=>e.preventDefault()}>
    <label>Message1</label>
    <input type="text" value={messageP1} onChange={(e)=>setmessageP1(e.target.value)}/><br/>
    <label>Message2</label>
    <input type="text" value={messageP2} onChange={(e)=>setmessageP2(e.target.value)}/>
   <button onClick={()=>props.envoyer(messageP1,messageP2)}>Envoi</button>
    </form>
   
    </>
  )
 
   
}
 
export default Fils