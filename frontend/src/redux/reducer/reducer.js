import authReducer from "./auth.reducer";
import userReducer from "./user.reducer"
import eventReducer from "./event.reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    event:eventReducer
});

export default rootReducer;