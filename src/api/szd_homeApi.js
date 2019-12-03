 import http from "utils/szd_request";
 export const homeList =(listID)=>http.get({
     url:"/ajax/Shop/getPageListByShop",
     data:{
        page_list_id:listID
     }
 })

 export const searchList = (shopName)=>http.get({
     url:"/ajax/Index/search",
     data:{
        shop_name:shopName
     }
 })

 export const messageList = (page,size,range)=>http.get({
     url:"/ajax/NewsOrder/getNewsOrder",
     data:{
        page:page,
        size:size,
        range:range
     }
 })
 export const historyList = (page,size,range)=>http.get({
    url:"ajax/NewsOrder/getTodayHistoryList",
    data:{
       page:page,
       size:size,
       range:range
    }
})
export const detailsList = (shopID)=>http.get({
   url:"/ajax/Shop/getBindShopGoods",
   data:{
      shop_id:shopID
   }
})
export const canteenList = (shopListId)=>http.get({
   url:"/ajax/Shop/getPageListByShop",
   data:{
      page_list_id:shopListId
   }
})