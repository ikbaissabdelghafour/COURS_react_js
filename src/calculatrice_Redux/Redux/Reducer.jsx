import * as actions  from "./Action";

const initialvalue={
        calc:{
            operation:null,
            zone1:null,
            zone2:null,
            result:null
        },
        historique:[]

}

export const reducer = (state=initialvalue , action ) => {
    switch(action.type){
        case actions.ADD:
            return {...state , calc: {operation :"+" , zone1:action.value.zone1 , zone2:action.value.zone2 , result :(+action.value.zone1 + +action.value.zone2) } , historique:[...state.historique , {operation :"+" , zone1:action.value.zone1 , zone2:action.value.zone2 , result :(+action.value.zone1 + +action.value.zone2) }]}
        case actions.SOS:
            return {...state , calc:{operation:"-" , zone1:action.value.zone1 , zone2:action.value.zone2 , result:+action.value.zone1 - +action.value.zone2 } , historique:[...state.historique , {operation:"-" , zone1:action.value.zone1 , zone2:action.value.zone2 , result:+action.value.zone1 - +action.value.zone2 }]}
        case actions.PROD:
            return {...state , calc:{operation:"x" , zone1:action.value.zone1 , zone2:action.value.zone2 , result:+action.value.zone1 * +action.value.zone2 } , historique:[...state.historique , {operation:"x" , zone1:action.value.zone1 , zone2:action.value.zone2 , result:+action.value.zone1 * +action.value.zone2 }]}
        case actions.DIV:
            return {...state , calc:{operation:"/" , zone1:action.value.zone1 , zone2:action.value.zone2 , result:+action.value.zone2!=0 ? +action.value.zone1 / +action.value.zone2 : " Tu ne peux pas diviser par 0 " } , historique:[...state.historique ,{operation:"/" , zone1:action.value.zone1 , zone2:action.value.zone2 , result:+action.value.zone2!=0 ? +action.value.zone1 / +action.value.zone2 : "ERROR" }]}         
        default:
            return state
    }

}



