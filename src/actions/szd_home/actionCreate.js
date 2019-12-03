 import {ListContent,ShopList,SearchList,MessageList,WordlList,HistoryList,DetailList,CanteenList} from "./actionType";
 import {createAction} from "redux-actions";
 import {homeList,searchList,messageList,historyList,detailsList,canteenList} from "api/szd_homeApi"
 export const ListContentAction = (listID)=>{
    let listAction = createAction(ListContent,(data)=>({data:data}))
     return async (dispatch)=>{
        let data = await homeList(5884);
        dispatch(listAction(data))
     }
 }

 export const ShopContentAction = (listID)=>{
   let shopAction = createAction(ShopList,(data)=>({data:data}))
    return async (dispatch)=>{
       let data = await homeList(15751);
       dispatch(shopAction(data))
    }
}

export const SearchContentAction = (shopName)=>{
   let shopAction = createAction(SearchList,(data)=>({data:data}))
   return async (dispatch)=>{
      let data = await searchList(shopName);
      dispatch(shopAction(data))
   }
}

export const MessageContentAction = (range)=>{
   let shopAction = createAction(MessageList,(data)=>({data:data}))
   return async (dispatch)=>{
      let data = await messageList(1,7,range);
      dispatch(shopAction(data))
   }
}
export const WorldContentAction = (range)=>{
   let shopAction = createAction(WordlList,(data)=>({data:data}))
   return async (dispatch)=>{
      let data = await messageList(1,7,range);
      dispatch(shopAction(data))
   }
}
export const HistoryContentAction = (range)=>{
   let shopAction = createAction(HistoryList,(data)=>({data:data}))
   return async (dispatch)=>{
      let data = await historyList(1,7,range)
      dispatch(shopAction(data))
   }
}
export const DetailContentAction = (shopId)=>{
   let shopAction = createAction(DetailList,(data)=>({data:data}))
   return async (dispatch) =>{ 
      let data=await detailsList(shopId)
      dispatch(shopAction(data))
   };

}
export const CanteenContentAction = (shopListId)=>{
   let shopAction = createAction(CanteenList,(data)=>({data:data}))
   return async (dispatch)=>{
      let data = await canteenList(shopListId)
      dispatch(shopAction(data))
   }
}