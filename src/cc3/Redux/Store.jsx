import { legacy_createStore } from "redux";
import { reducerEmployre , reducerService } from "./Reducer";
import { combineReducers } from "redux";
const RootReducers = combineReducers({service:reducerService, employer:reducerEmployre })
export const store = legacy_createStore(RootReducers); 