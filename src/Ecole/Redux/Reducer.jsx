import { ADDCLASS , ADDELE , SUPCLASS ,SUPELE , EDITCLASS , EDITELE , UPDCLASS ,UPDELE , FILTERELE ,NBR    } from "./Action";

const initialeClass = {
    classes:[],
    cla:{}

}

export const reduceClass = (state = initialeClass , action)=>{

    switch(action.type){
        case ADDCLASS:
            return { ...state , classes:[...state.classes , action.payload]}
        case SUPCLASS:
            return  {...state , classes:[...state.classes.filter((ele)=>ele.id!=action.payload)]}
        case EDITCLASS :
            return {...state , cla:state.classes.find(ele=>(ele.id==action.payload))}
        case NBR :
            return {...state , classes:[...state.classes.map((ele)=>ele.id==action.payload.idclass?ele.Nb:ele.Nb + +action.payload.pass ) ]}
        case UPDCLASS:
            return {...state , classes:[...state.classes.map(ele=>ele.id==action.payload.id ? action.payload : ele)]}
        default :
            return state

    }
}
const initialeEleves={
    eleves:[],
    eleve:{}

}
export const reduceEleves = (state = initialeEleves , action)=>{

    switch(action.type){
        case ADDELE:
            return { ...state , eleves:[...state.eleves , action.payload]}
        case SUPELE:
            return  {...state , eleves:[...state.eleves.filter((ele)=>ele.id!=action.payload)]}
        case EDITELE :
            return {...state , eleve:state.eleves.find(ele=>(ele.id==action.payload))}
        case UPDELE:
            return {...state , eleves:[...state.eleves.map(ele=>ele.id==action.payload.id ? action.payload : ele)]}
        default :
            return state

    }
}










