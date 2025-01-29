import * as actions  from "./Action"
const initialevalue={
            iteams: [
            {id:1, nom:"ikbaiss "   ,prenom:"Abdelghafour"},
            {id:2, nom:"elmoukhtari"   ,prenom:"Hamza"},
            {id:3, nom:"ouadi"   ,prenom:"Mouad"},
            {id:4, nom:"elkassmi"   ,prenom:"Rachid"},
                    ],
            single_item:{}
                }
export  const reducer=(state = initialevalue , action )=>{
    switch(action.type){
        case actions.CREATE :
            return {...state  , iteams:[...state.iteams,{id:state.iteams.length>0 ?+state.iteams.at(-1).id+1 : 1 , ...action.payload}]}
        case actions.SHOW:
            return {...state , single_item:state.iteams.find((ele)=>ele.id==action.payload)}
        case actions.UPDATE:
            return {...state , iteams:state.iteams.map(ele=>ele.id==action.payload.id?action.payload:ele)}
        // return {...state ,iteams: [ ...state.iteams.filter((ele)=>!(ele.id==action.payload.id )) , action.payload]}
        case actions.DELET:
            return {...state , iteams:state.iteams.filter((ele)=>(ele.id != action.payload)) , single_item:{}}
        default:
            return state
    }

}

