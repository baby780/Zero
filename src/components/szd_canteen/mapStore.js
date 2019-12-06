import {CanteenContentAction} from "actions/szd_home/actionCreate"
export const mapStateToProps=(state)=>({
    canTeenList:state.canteen.canteenList
})
export const mapDispatchToProps=(dispatch)=>({
    handleCanteenList(id){
        dispatch(CanteenContentAction(id))
    }
})