import {handleActions} from "redux-actions";
import {weekAsyncType} from "actions/actionsTypes"

const defaultState = {
    Zero:[]
}


export default handleActions({
   /*  [weekAsyncType]:(state,action)=>{
        let weekState = JSON.parse(JSON.stringify(state));
        weekState.Zero = action.payload.data;
        return weekState
    } */
},defaultState)
