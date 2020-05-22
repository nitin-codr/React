import { combineReducers } from "redux";
import authReducer from "./authReducer";
import modeReducer from "./modeReducer";

export default combineReducers ({
    auth: authReducer,
    mode: modeReducer
})