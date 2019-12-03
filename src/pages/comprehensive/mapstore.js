import {compAction} from "actions/home/yzactionCreator"
export const mapStateToProps=(state)=>({
    comp:state.yzhome.comp
})
export const mapDispatchToProps=(dispatch)=>({
    handlecomp(){
        dispatch(compAction())
    }
})