import {recoAction} from "actions/home/yzactionCreator"
export const mapStateToProps=(state)=>({
    reco:state.yzhome.reco
})
export const mapDispatchToProps=(dispatch)=>({
    handleEeco(){
        dispatch(recoAction())
    }
})