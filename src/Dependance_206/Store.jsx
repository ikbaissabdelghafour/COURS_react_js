import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import {reducerClients ,reducerCommandes} from './Reducers'
const RooteReducer =combineReducers({client:reducerClients,commande:reducerCommandes})
export const store = createStore(RooteReducer) 



// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import {reducerClients ,reducerCommandes} from './Reducers'
// const RooteReducer =combineReducers({client:reducerClients,command:reducerCommandes})
// export const store = configureStore({reducer:RooteReducer}) 
 