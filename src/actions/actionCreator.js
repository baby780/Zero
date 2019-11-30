import {ZeroAsyncType} from "./actionsTypes";
import {createAction} from "redux-actions";
import {ZeroApi}  from "api/Bohai.js"
export const ZeroAsyncAction =(page_list)=>{
    
    return async(dispatch)=>{
        let data=await ZeroApi(14059);
        console.log(data);
    }
}