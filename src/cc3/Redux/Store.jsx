// -------------------------------------------- STORE --------------------------------------------



import { legacy_createStore } from "redux";
import { reducerEmployre , reducerService } from "./Reducer";
import {combineReducers} from 'redux'
const RootReducer = combineReducers({service:reducerService,employer:reducerEmployre})
export const store = legacy_createStore(RootReducer)



