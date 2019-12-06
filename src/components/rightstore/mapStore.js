import {DianAcyncAction} from "actions/actionCreator"

export const mapStateToProps=(state)=>({
        Goods:state.bohai.Goods,
})


export const mapDispatchToProps=(dispatch)=>({
    handleAsycnDian(id){
        dispatch(DianAcyncAction(id))
       
    }
})