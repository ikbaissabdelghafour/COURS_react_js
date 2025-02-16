import {ADDSERV,SUPSERV,EDITSERV,MODIFSERV, UPDBUDGET,UPDNBEMPL,ADDEMPL,EDITEMPL,SUPEMPL,MODIFEMPL,FILTEREMPL} from './Action.jsx' 
const initialeService={
    services:[],
    service:{},
}

// ---------------------------------------------------------  Reducer Services ---------------------------------------------------------

export const reducerService= (state=initialeService,action)=>{

switch(action.type){

    case ADDSERV:
        return {...state , services:[...state.services , action.payload]}
    case SUPSERV:
        return {...state , services:state.services.filter(ele=>ele.numero!=action.payload)}
    case EDITSERV:
        return {...state , service:state.services.find(ele=>ele.numero==action.payload)}
    case MODIFSERV:
        return {...state, services:[...state.services.filter(ele=>ele.numero!=action.payload.numero) , action.payload]}
    case UPDNBEMPL:
        return {...state,services:[...state.services.map(ele=>ele.numero==action.payload.service_num ?{...ele , nbr_emp: +ele.nbr_emp + +action.payload.pas} : ele)]}
    case UPDBUDGET :
        return {...state , services:[...state.services.map(ele=>ele.numero ==action.payload.service_num ? {...ele , budget:+ele.budget + +action.payload.pas }: ele)]}
    default:
        return state
}
}

// ---------------------------------------------------------  Reducer Employer ---------------------------------------------------------
const initialEmployer= {
    employer:[],
    emp:{},
    employer2:[]

}

export const reducerEmployre = (state=initialEmployer , action)=>{

    switch(action.type){

        case ADDEMPL:
            return {...state , employer:[...state.employer , action.payload ]}
        case EDITEMPL:
            return {...state , emp:state.employer.find(ele=>ele.id==action.payload)}
        case MODIFEMPL :
            return {...state, employer:[...state.employer.filter(ele=>ele.id!=action.payload.id) , action.payload]}
        case SUPEMPL :
            return {...state,employer:state.employer.filter(ele=>ele.id!=action.payload)}
        case FILTEREMPL:
            return {...state , employer2:state.employer.filter(ele=>ele.service==action.payload)}
        default:
            return state
    }
}
