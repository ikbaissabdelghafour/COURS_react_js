import {filtcalss,updatenbeleve,addelev,supelev,editelev,modifelev,addclass,supclass,editclass,modifclass} from './Actions'

const intialiseState1={classes:[],clas:{}}
const intialiseState2={eleves:[],elv:{},eleves2:[]}
export const reducerClasses = (state = intialiseState1, action) => {
    switch (action.type) {
        case addclass:
            return {...state,classes:[...state.classes,action.payload]} 
            case supclass:
                return {...state,classes:[...state.classes.filter(el=>el.id!=action.payload)]} 
          case modifclass:
           return  {...state,classes:[...state.classes.filter(el=>el.id!=action.payload.id),action.payload]}
            case editclass:
                return {...state,clas:{...state.classes.find(el=>el.id==action.payload)}}
        case updatenbeleve:
            return {...state,
            classes:state.classes.map(classe=>
            classe.id==action.payload.idclass?
            {...classe,nbeleves:classe.nbeleves+action.payload.pas,nbplaces:classe.nbplaces-action.payload.pas}:classe)}
                default:
            return state
    }
}
export const reducerEleves = (state =intialiseState2 , action) => {
    switch (action.type) {
      case filtcalss:
        return{...state,eleves2:[...state.eleves.filter(el=>el.idclass==action.payload)]}
            case addelev:
                return {...state, eleves:[...state.eleves,action.payload]} 
                case supelev:
                    return {...state,eleves:[...state.eleves.filter(el=>el.id!=action.payload)]} 
              case modifelev:
               return  {...state,eleves:[...state.eleves.filter(el=>el.id!=action.payload.id),action.payload]}
                case editelev:
                    return {...state,elv:{...state.eleves.find(el=>el.id==action.payload)}}
            default:
                return state
        }
    }
