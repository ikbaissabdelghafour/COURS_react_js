import { act } from 'react'
import {ADDCLI , DELETECLI , UPDATECLI , EDITCLI , initialiseState1} from './Action'

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

// export const reducercommand = (state={table:[],} , action)=>{
//     switch(action.type){
//         case 
//     }
// }

