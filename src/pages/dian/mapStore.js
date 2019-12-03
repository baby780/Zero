import {DianAcyncAction} from "actions/actionCreator"

export const mapStateToProps=(state)=>({
        Sort:state.bohai.Sort,
        Goods:state.bohai.Goods,
        Like:state.bohai.Like
})


export const mapDispatchToProps=(dispatch)=>({
    handleAsycnDian(id){
        dispatch(DianAcyncAction(id))
       
    }
})