
import {homeType,recoType,compType,headType,listType} from "./yzactionType"
import {createAction} from "redux-actions"
import {yzhome,yzreco,yzcomp,yzhead,yzlist} from "api/yahome"
 
export const homeAction =(id)=>{
   let homwAction=createAction(homeType,(data)=>({data:data}))
   
   return async(dispatch)=>{
        let data=await yzhome(2258);
        dispatch(homwAction(data))
    }
}
export const recoAction=(id)=>{
    let recoAction=createAction(recoType,(data)=>({
        data:data
    }))
    return async(dispatch)=>{
        let data=await yzreco(14578);
        dispatch(recoAction(data))
    }
}
export const compAction=(page,size)=>{
    let compAction=createAction(compType,(page,size)=>({
        page:page,
        size:size
    }))
    return async(dispatch)=>{
        let data=await yzcomp(1,15)
        dispatch(compAction(data))
    }
}
export const headAction=(page,size,range)=>{
    let headActions =createAction(headType,(page,size,range)=>({
        page:page,
        size:size,
        range:range
    }))
    return async(dispatch)=>{
        let data=await yzhead(1,7,1)
        dispatch(headActions(data))
    }

}
export const listAction=(id)=>{
    let listActions =createAction(listType,data=>data)
    return async(dispatch)=> {
        let data=await yzlist(id)
         dispatch(listActions(data))
    }
}