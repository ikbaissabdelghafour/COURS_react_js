import {ADD , SOS , MISE , STEP}  from  "./Action" 

const initiavalue={
    act:"pas D'action",
    Valeur:0,
    stp:1,
    count:0,
    inc:0,
    dec:0,
    maz:0
}

export const reducer = (state=initiavalue , action)=>{

    switch(action.type){
        case ADD:
            return {...state , Valeur : state.Valeur + state.stp  , act:"incrementer" ,count:++state.count , inc:++state.inc}
        case SOS:
            return {...state , Valeur:state.Valeur - state.stp , act: "Decrementer" , count:++state.count , dec:++state.dec}
        case MISE:
            return {...state , Valeur:0 , act:"Mise a jour a 0" , maz:++state.maz}
        case STEP:
            return {...state , stp: action.payload}
        default:
            return state
    }

}