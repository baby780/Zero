import {ZeroAsyncAction,ZeroTwoAsyncAction,ZeroThreeAsyncAction} from "actions/actionCreator"
export const mapStateToProps=(state)=>({
    Zero:state.bohai.Zero,
    ZeroTwo:state.bohai.ZeroTwo,
    ZeroThree:state.bohai.ZeroThree,
})


export const mapDispatchToProps=(dispatch)=>({
    handleAsyncZero(index){
        dispatch(ZeroAsyncAction(14059,index))
    },
    handleAsyncTwoZero(index){
        dispatch(ZeroTwoAsyncAction(14058,index))
    },
    handleAsyncThreeZero(index){
        dispatch(ZeroThreeAsyncAction(13457,index))
    }
    
})



