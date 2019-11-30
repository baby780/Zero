import {ZeroAsyncAction,ZeroTwoAsyncAction,ZeroThreeAsyncAction} from "actions/actionCreator"
export const mapStateToProps=(state)=>({
    Zero:state.bohai.Zero,
    ZeroTwo:state.bohai.ZeroTwo,
    ZeroThree:state.bohai.ZeroThree
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncZero(){
        dispatch(ZeroAsyncAction(14059))
    },
    handleAsyncTwoZero(){
        dispatch(ZeroTwoAsyncAction(14058))
    },
    handleAsyncThreeZero(){
        dispatch(ZeroThreeAsyncAction(13457))
    }
    
})



