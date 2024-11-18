import React ,{useState}from 'react'
import Insert from './Insert'
import Editer from './Editer'
import Afficher from './Afficher'
const  list=[
    {id:1,nom:"elgasmi",prenom:"hamza",adr:"casa"},
    {id:2,nom:"ikbaiss",prenom:"abdo",adr:"Casablanca"},
    {id:3,nom:"Rachid",prenom:"hamza",adr:"casa"},
    {id:4,nom:"elgasmi",prenom:"hamza",adr:"casa"},
]
function App() {
    const [data,setData]=useState(list)
    const [obj1,setObj1]=useState({})
    // const [obj2,setObj2]=useState({})
    const f1=(num)=>{setData(data.filter(ele=>!(ele.id===num)))}
    const f2=(num)=>{setObj1(data.find(ele=>ele.id===num))}
    const f3=(obj)=>{setData([...data.filter(ele=>ele.id!==obj1.id),obj])}
    
    const f4=(obj1)=>{const recherch=data.find(ele=>ele.id==obj1.id);
             !recherch && setData([...data,obj1])}
  return (<>
    <fieldset>
      <legend>Insertion</legend>
      <Insert oninsert={f4}/>
    </fieldset>
    <fieldset>
      <legend>Affichage</legend>
      <Afficher tableau={data} onsupprime={f1} onedit={f2}/>
    </fieldset>
    <fieldset>
      <legend>Edition</legend>
      <Editer onmodif={f3} monobj={obj1} />
    </fieldset>
    </>
  )
}

export default App
