import { legacy_createStore as  create_store} from "redux";
import { reducer } from "./Reducer"
export const store = create_store(reducer);