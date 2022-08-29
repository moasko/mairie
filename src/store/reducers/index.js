import { combineReducers } from "redux";
import { motoReducer } from "./moto";
import {agentReducer} from './agent'

const rootReducer = combineReducers({
    motos:motoReducer,
    agents:agentReducer,
})

export default rootReducer;