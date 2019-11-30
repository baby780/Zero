import {handleActions} from "redux-actions";
import {ZeroAsyncType,ZeroTwoAsyncType,ZeroThressAsyncType} from "actions/actionsTypes"

const defaultState = {
    Zero:[],
    ZeroTwo:[],
    ZeroThree:[]
}


export default handleActions({
    [ZeroAsyncType]:(state,action)=>{
        let zeroState = JSON.parse(JSON.stringify(state));
        zeroState.Zero = action.payload.data.data.data;
        return zeroState
        
    },
    [ZeroTwoAsyncType]:(state,action)=>{
        let zerotwoState=JSON.parse(JSON.stringify(state));
        zerotwoState.ZeroTwo=action.payload.data.data.data;
        return zerotwoState;
    },
    [ZeroThressAsyncType]:(state,action)=>{
        let zerothreeState=JSON.parse(JSON.stringify(state));
        zerothreeState.ZeroThree=action.payload.data.data.data;
        return zerothreeState;
    }
},defaultState)
