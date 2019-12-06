import {MessageContentAction,HistoryContentAction,WorldContentAction,BenSchoolAction} from "actions/szd_home/actionCreate"
export const mapStateToProps = (state)=>({
    
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
    },
    handleBenSchool(size,region){
        dispatch(BenSchoolAction(size,region))
    }
})