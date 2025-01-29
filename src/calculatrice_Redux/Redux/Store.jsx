import { legacy_createStore as magazin } from "redux";
import { reducer } from "./Reducer";
export const store = magazin(reducer);
