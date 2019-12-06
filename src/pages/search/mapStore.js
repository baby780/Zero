import {searchAction} from "actions/home/yzactionCreator"
export const mapStateToProps=(state)=>({
    goods:state.yzhome.goods
})
export const mapDispatchToProps=(dispatch)=>({
    handleSubmit(name){
        dispatch(searchAction(name))
    }
})