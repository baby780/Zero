import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import bohai from "./reducers/bohai";
import yzhome from "./reducer/yzhome";

const reducers = combineReducers({
    bohai,
    yzhome
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;