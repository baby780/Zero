import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import bohai from "./reducers/bohai";
import yzhome from "./reducer/yzhome";
import home from "./szd_reducers/home";
import search from "./szd_reducers/search";
import message from "./szd_reducers/message";
import detail from "./szd_reducers/detail";
import canteen from "./szd_reducers/canteen";
const reducers = combineReducers({
    bohai,
    yzhome,
    home,
    search,
    message,
    detail,
    canteen
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;