import { legacy_createStore } from "redux"; 
import { combineReducers } from "redux";
import {reduceEleves , reduceClass} from "./Reducer"
const Rootreducer = combineReducers({eleves : reduceEleves , classes : reduceClass})
export const store = legacy_createStore(Rootreducer)