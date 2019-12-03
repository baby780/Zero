import http from "utils/request"

export const yzhome=(id)=>http.get({
    url:"/ajax/Shop/getPageListByShop",
    data:{
        page_list_id:id
    },
    
})

export const yzreco=(id)=>http.get({
    url:"/ajax/Shop/getPageListByShop",
    data:{
        page_list_id:id//14578
    }
})
export const yzcomp=(page,size)=>http.get({
    url:"/ajax/Shop/getAllShop",
    data:{
        page:page//1
        ,
        size:size//15
    }
})
export const yzhead=(page,size,range)=>http.get({
    url:"/ajax/NewsOrder/getNewsOrder",
    data:{
        page:page,
        size:size,
        range:range
    }
})
export const yzlist=(id)=>http.get({
    url:"/ajax/Shop/getBindShopGoods",
    data:{
        shop_id:id
    }
})