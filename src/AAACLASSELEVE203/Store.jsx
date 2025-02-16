import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { reducerEleves,reducerClasses } from './Reduceurs'
const rootreduceur=combineReducers({classe:reducerClasses,
eleve:reducerEleves})
export const store=configureStore({reducer:rootreduceur})