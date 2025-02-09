import { addcli , supcli , modifcli ,addcom,supcom,editcom, modifcomfcom, modifcom } from "./Actions"
const initialiseState1={
    clients:[]
}
const initialiseState2={
    commandes:[],
    com:{}
}
export const reducerClients = (state=initialiseState1  , action) => {
    switch (action.type) {
        case addcli:
            return {...state , clients:[...state.clients , action.payload]}
        case supcli:
            return {...state , clients:[...state.clients.filter(ele=>ele.id!=action.payload)]}
        case modifcli:
            return {...state , clients:[...state.clients.filter(ele=>ele.id!=action.payload.id),action.payload]}
        default:
            return state
    }
}

export const reducerCommandes = (state = initialiseState2, action) => {
    switch (action.type) {
        case addcom:
            return {...state , commandes:[...state.commandes , action.payload]}
        case supcom:
            return {...state , commandes:[...state.commandes.filter(ele=>ele.id!=action.payload)]}
        case editcom:
            return {...state , com:{...state.commandes.find(ele=>ele.id==action.payload)}}
        case modifcom:
            return {...state , commandes:[...state.commandes.filter(ele=>ele.id!=action.payload.id),action.payload]}
    
        default:
            return state
    }
}