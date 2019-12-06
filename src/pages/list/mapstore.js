import {listAction} from "actions/home/yzactionCreator"
export const mapStateToProps=(state)=>({
   list:state.yzhome.list
})
export const mapDispatchToProps=(dispatch)=>({
    handliList(id){
        console.log(id)
        dispatch(listAction(id))
    }
})