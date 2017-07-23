import {combineReducers} from "redux"
import accountReducer from "./account"
import userReducer from  "./user"


const rootReducer = combineReducers({
    account:accountReducer
    user:userReducer

})

export default rootReducer
