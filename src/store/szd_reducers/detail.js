import {handleActions} from 'redux-actions';
import {DetailList} from "actions/szd_home/actionType";

const defaultState = {
    detailList:[]
}
export default handleActions({
    [DetailList]:(state,action)=>{
        let detailState = JSON.parse(JSON.stringify(state))
        detailState.detailList = action.payload.data.data;
        return detailState
    }
},defaultState)