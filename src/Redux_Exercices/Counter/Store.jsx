import { legacy_createStore as createstore } from "redux";
import { reducer } from "./Reducer";
export const store =createstore(reducer);