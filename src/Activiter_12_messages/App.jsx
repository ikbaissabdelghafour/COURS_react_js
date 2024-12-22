import React, { useState } from 'react'
import Personne1  from './Personne1'
import Personne2 from './Personne2'
import Historique from './Historique'
function APP() {
const [messagedp1,setMessagedp1]=useState('')
const [messagedp2,setMessagedP2]=useState('')
const [C1,setCompteur1]=useState(0)
const [C2,setCompteur2]=useState(0)
const [mess__p1,setMess__p1]=useState([])
const [mess__p2,setMess__p2]=useState([])
const [allmessage,setAllmessage]=useState([])
const [id,setId]=useState(0)
const f1=(mess1)=>{setMessagedp1(mess1);
        setMess__p1([...mess__p1,mess1]);
        setCompteur1(C1+1)
        setAllmessage([...allmessage,{message:mess1,text :"les message envoyer par P1 est "}]);
      }
const f2=(mess2)=>{setMessagedP2(mess2);
        setMess__p2([...mess__p2,mess2]);
        setCompteur2(C2+1);
        setId(id+1)
        setAllmessage([...allmessage,{id:id, message:mess2,text :"les message envoyer par P2 est "} ])
      }
const delet=(id)=>{setAllmessage(allmessage.filter(ele=>ele.id!==id))}
  return (
    <>
      <fieldset>
        <legend>perssone 1 </legend>
        <Personne1 messagesp2={mess__p2}  take_mess2={messagedp2} messageP1={f1}/>
      </fieldset>
      <fieldset>
        <legend>perssone 2 </legend>
        <Personne2 messagesp1={mess__p1} take_mess1={messagedp1} messageP2={f2} />
      </fieldset>
      <fieldset>
        <legend>Historque des messages </legend>
        <Historique  mess={allmessage} compt1={C1} compt2={C2} supprimer={delet} />
      </fieldset>
    </>
  )
}

export default APP
