import {handleActions} from "redux-actions";
import {ListContent,ShopList} from "actions/szd_home/actionType";
const defaultState = {
    homeList:[],
    shopList:[]
}
export default handleActions({
    [ListContent]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state))
        homeState.homeList = action.payload.data.data.data;
        return homeState
    },
    [ShopList]:(state,action)=>{
        let listState = JSON.parse(JSON.stringify(state))
        listState.shopList = action.payload.data.data.data;
        return listState
    }
},defaultState)