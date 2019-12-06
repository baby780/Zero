import {homeAction} from "actions/home/yzactionCreator"
export const mapStateToProps=(state)=>({
    home:state.yzhome.home
    
    
})
export const mapDispatchToProps=(dispatch)=>({
    handleHome(){
        dispatch(homeAction())
    }
})