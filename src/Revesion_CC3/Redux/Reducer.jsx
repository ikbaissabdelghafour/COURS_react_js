import {ADDCLI , DELETECLI , UPDATECLI , EDITCLI , initialiseState1 , ADDCOM , DELETECOM , EDITCOM, UPDATECOM} from './Action'

export const reducerclient  = ( state={table:[],show:{}} , action )=>{
switch(action.type){
    case initialiseState1:
        return {...state , table:action.payload}
    case ADDCLI:
        return {...state , table:[...state.table ,action.payload]}
    case DELETECLI:
        return  {...state,table:state.table.filter((ele)=>!(ele.id == action.payload))}
    case UPDATECLI:
        return {...state, table:[...state.table.filter((ele)=>!(ele.id==action.payload.id)) ,action.payload]}     
    case EDITCLI:
        return {...state , show:state.table.find((ele)=>ele.id==action.payload)}
    default:
        return state

}
}
const initialiseState2={
    commande:[],
    com:{}
}
export const reducercommand = (state=initialiseState2 , action)=>{
    switch(action.type){
        case ADDCOM:
            return {...state , commande:[...state.commande , action.payload]}
        case DELETECOM:
            return {...state , commande:[...state.commande.filter((ele)=>ele.numero!=action.payload)]}        
        case UPDATECOM:
                return {...state,commande:[...state.commande.filter((ele)=>!(ele.numero==action.payload.numero))  ,action.payload]}
        case EDITCOM :
            return {...state,com:state.commande.find(ele=>ele.numero==action.payload)}
        default:
            return state
                
            }
        }