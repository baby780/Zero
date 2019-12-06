import {handleActions} from 'redux-actions';
import {SearchList} from "actions/szd_home/actionType";
const defaultState = {
    searchList:[]
}
export default handleActions({
    [SearchList]:(state,action)=>{
        let searchState = JSON.parse(JSON.stringify(state))
        searchState.searchList = action.payload.data.data;
        return searchState
    }
},defaultState)