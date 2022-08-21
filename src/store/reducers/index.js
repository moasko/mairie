import { combineReducers } from "redux";
import { motoReducer } from "./moto";

const rootReducer = combineReducers({
    motos:motoReducer,
})

export default rootReducer;