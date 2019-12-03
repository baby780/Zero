import {headAction} from "actions/home/yzactionCreator"
export const mapStateToProps=(state)=>({
    arr:state.yzhome.arr,
    title:state.yzhome.title
   
})
export const mapDispatchToProps=(dispatch)=>({
    handleHead(){
        dispatch(headAction())
    }
})