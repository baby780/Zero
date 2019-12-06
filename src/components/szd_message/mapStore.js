import {MessageContentAction,HistoryContentAction,WorldContentAction} from "actions/szd_home/actionCreate"
export const mapStateToProps = (state)=>({
    messageList:state.message.benSchoolList,
    historyList:JSON.parse(localStorage.getItem("history")) || state.message.historyList,
    worldList:JSON.parse(localStorage.getItem("world")) || state.message.oldWorldList,
    sameCityList:state.message.sameCityList
})
export const mapDispatchToProps = (dispatch)=>({
    handleSchoolList(index){
        dispatch(MessageContentAction(index))
    },
    handleWorldList(index){
        dispatch(WorldContentAction(index))
    },
    handleHistoryList(index){
        dispatch(HistoryContentAction(index))
    }
})