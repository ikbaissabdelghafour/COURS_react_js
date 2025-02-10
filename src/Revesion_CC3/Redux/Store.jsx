import {configureStore} from "@reduxjs/toolkit";
import {reducerclient,reducercommand} from "./Reducer";
import {combineReducers} from "redux";
const Rootreducers=combineReducers({clients:reducerclient,commandes:reducercommand})
export const store=configureStore({reducer:Rootreducers})
