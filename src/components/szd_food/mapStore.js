import {DetailContentAction} from "actions/szd_home/actionCreate"
export const mapStateToProps=(state)=>({
    detailList:state.detail.detailList
})
export const mapDispatchToProps=(dispatch)=>({
    handleDetailList(id){
        dispatch(DetailContentAction(id))
    }
})