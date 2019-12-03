import {LikeAsyncAction,DingAsyncAction} from "actions/actionCreator";

export const mapStateToProps=(state)=>({
    Like:state.bohai.Like,
    Ding:state.bohai.Ding
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncLike(){
        dispatch(LikeAsyncAction());
    },
    handleAsyncDing(page,size){
        dispatch(DingAsyncAction(page,size))
    }
})