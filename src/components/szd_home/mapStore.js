import {ListContentAction,ShopContentAction,CanteenContentAction} from "actions/szd_home/actionCreate"
export const mapStateToProps=(state)=>({
    homeList:state.home.homeList,
    shopList:state.home.shopList
})
export const mapDispatchToProps=(dispatch)=>({
    handleAsyncList(){
        dispatch(ListContentAction())
    },
    handleShopList(){
        dispatch(ShopContentAction())
    },
})