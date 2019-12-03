import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import yzhome from "./reducer/yzhome";

const reducers=combineReducers({
    yzhome
})


const store =createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store
