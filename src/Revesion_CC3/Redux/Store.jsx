import {configureStore} from "@reduxjs/toolkit";
import {reducerclient} from "./Reducer";
export const store=configureStore({reducer:reducerclient})
