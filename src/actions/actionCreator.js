import {ZeroAsyncType,ZeroTwoAsyncType,ZeroThressAsyncType} from "./actionsTypes";
import {createAction} from "redux-actions";
import {ZeroApi,ZerotwoApi,ZeroThreeApi}  from "api/Bohai.js"
export const ZeroAsyncAction =(page_list)=>{

    //相当于action.types
    let ZeroAction=createAction(ZeroAsyncType,(data)=>({data:data}))
   
    return async(dispatch)=>{
        let data=await ZeroApi(page_list);
        dispatch(ZeroAction(data))
      
    }
}


export const ZeroTwoAsyncAction =(page_list)=>{
    
    let ZeroTwoAction=createAction(ZeroTwoAsyncType,(data)=>({data:data}))

    return async (dispatch)=>{
        let data=await ZerotwoApi(page_list);
        dispatch(ZeroTwoAction(data))
        
    }
}


export const ZeroThreeAsyncAction =(page_list)=>{
    let ZeroThreeAction=createAction(ZeroThressAsyncType,(data)=>({data:data}))

    return async (dispatch)=>{
        let data =await ZeroThreeApi(page_list);
        dispatch(ZeroThreeAction(data))
    }
}