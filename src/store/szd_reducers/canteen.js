import {handleActions} from "redux-actions";
import {CanteenList} from "actions/szd_home/actionType";
const defaultState = {
    canteenList:[]
}
export default handleActions({
    [CanteenList]:(state,action)=>{
        let canteenState = JSON.parse(JSON.stringify(state))
        canteenState.canteenList = action.payload.data.data.data;
        return canteenState
    }
},defaultState)