import {MessageContentAction,HistoryContentAction,WorldContentAction} from "actions/szd_home/actionCreate"
export const mapStateToProps = (state)=>({
    messageList:state.message.benSchoolList,
    historyList:state.message.historyList,
    worldList:state.message.newWorldList
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