import {DianAcyncAction} from "actions/actionCreator"

export const mapStateToProps=(state)=>({
        Sort:state.bohai.Sort,
})


export const mapDispatchToProps=(dispatch)=>({
    handleAsycnDian(id){
        dispatch(DianAcyncAction(id))
       
    }
})