import React,{ useState }  from 'react'
 
import Fils from './TP1/Fils.JSX'
function Pere(props) {
    const[messagefils1,setMessagefils1]=useState("")
    const[messagefils2,setMessagefils2]=useState("")
    const f1=(m1,m2)=>{setMessagefils1(m1);setMessagefils2(m2);}
  return (
    <div> <h1>Composant Pere </h1><hr/>
<Fils messagepere={props.message}  envoyer={(m1,m2)=>{setMessagefils1(m1);setMessagefils2(m2)}} /><hr/>
        <h1>le message envoyé de mon fils est :{messagefils1}</h1>
        <h1>le message envoyé de mon fils est :{messagefils2}</h1>
 
    </div>
  )
}
 
export default Pere