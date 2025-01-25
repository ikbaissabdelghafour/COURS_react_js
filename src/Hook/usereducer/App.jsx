import React,{useReducer} from "react";
export default function App(){
    const initisalstate= {
        valeur :0
    }
    const reduce =(state = initisalstate, action)=>{
    switch (action){
        case "plus":
            return {valeur: state.valeur+1};
        case "minse":
            return {valeur : state.valeur-1};
        case "reste":
            return {valeur : 0};
        default :
            return state;
        }
    }
    const [status, dispatch]=useReducer(reduce,initisalstate );

    return(
        <>
        <button onClick={()=>dispatch("plus")} >+</button>
        <button onClick={()=>dispatch("minse")} >-</button>
        <button onClick={()=>dispatch("reste")} >reset</button>
        <h1> {status.valeur} </h1>
        </>
    )

}
