import {handleActions} from 'redux-actions';
import {MessageList,HistoryList,WordlList,BenSchoolList} from "actions/szd_home/actionType";
const defaultState = {
    benSchoolList:[],
    historyList:[],
    worldList:[],
    sameCityList:[],
    newWorldList:[],
    oldWorldList:[]
}
export default handleActions({
    [MessageList]:(state,action)=>{
        let messageState = JSON.parse(JSON.stringify(state))
        messageState.benSchoolList = action.payload.data.data;
        return messageState
    },
    [BenSchoolList]:(state,action)=>{
        let benSchoolState = JSON.parse(JSON.stringify(state))
        benSchoolState.benSchoolList = action.payload.data.data
        return benSchoolState
    },
    [WordlList]:(state,action)=>{
        let worldState = JSON.parse(JSON.stringify(state))
        worldState.worldList=action.payload.data.data;
        for (let i in worldState.worldList) {
            let o = {};
            o[i] = worldState.worldList[i];
            worldState.newWorldList.push(o)
        }
        for( var n=0;n<worldState.newWorldList.length;n++){
            for (let m in worldState.newWorldList[n]) {
                let q = {};
                q[m] = worldState.newWorldList[n][m];
                worldState.oldWorldList.push(q[m])
            }
        }
        localStorage.setItem("world",JSON.stringify(worldState.oldWorldList))
        return worldState
    },
    [HistoryList]:(state,action)=>{
        let historyState = JSON.parse(JSON.stringify(state));
        historyState.historyList = action.payload.data.data.list;
        return historyState
    }
},defaultState)