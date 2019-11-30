import {ZeroAsyncAction} from "actions/actionCreator"
export const mapStateToProps=(state)=>({

})

export const mapDispatchToProps=(dispatch)=>({
    hanleAsyncZero(){
        dispatch(ZeroAsyncAction())
    }
})