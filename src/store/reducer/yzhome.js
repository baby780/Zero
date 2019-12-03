import {handleActions} from "redux-actions"
import {homeType,recoType,compType,headType,listType} from "actions/home/yzactionType"

const defaultState={
    home:[],
    reco:[],
    comp:[],
    head:[],
    list:[],
    title:[],
    arr:[]
}
export default handleActions({
    [homeType]:(state,action)=>{
        let homeState=JSON.parse(JSON.stringify(state));
        homeState.home=action.payload.data.data.data;
        return homeState

    },
    [recoType]:(state,action)=>{
        let recoState=JSON.parse(JSON.stringify(state));
        recoState.reco=action.payload.data.data.data;
        return recoState
    },
    [compType]:(state,action)=>{
        let compState=JSON.parse(JSON.stringify(state));
        compState.comp=action.payload.page.data.data;
        return compState
    },
    [headType]:(state,action)=>{
        let headState=JSON.parse(JSON.stringify(state));
        headState.head= action.payload.page.data;  
        //let arr=[];
        for( var key in  headState.head){
         
            // console.log(headState.head)
            headState.head[key].list.title=headState.head[key].data_week
            // headState.title.push(headState.head[key].list)
            headState.arr.push(headState.head[key].list)
          
        }
         console.log(headState.arr)
        
        return headState;

    },
    [listType]:(state,action)=>{
        let listState=JSON.parse(JSON.stringify(state));
        listState.list=action.payload.data.noClassify
        console.log(listState.list)
        return listState
    }
    
},defaultState)