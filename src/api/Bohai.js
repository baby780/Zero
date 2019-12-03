import http from "utils/request";
import axios from "axios";
export const ZeroApi = (page_list)=>http.get({
    url:"/ajax/Shop/getPageListByShop",
    data:{
        page_list_id:page_list
    }
})

export const ZerotwoApi =(page_list)=>http.get({
    url:"/ajax/Shop/getPageListByShop",
    data:{
        page_list_id:page_list
    }
})

export const ZeroThreeApi =(page_list)=>http.get({
    url:"/ajax/Shop/getPageListByShop",
    data:{
        page_list_id:page_list
    }
})

// export const DianApi =(id)=>axios({
//     method:"get",
//     url:"/ajax/Shop/getBindShopGoods",
//     data:{
//         shop_id:id
//     }
// })
export const DianApi =(id)=>http.get({
    url:"/ajax/Shop/getBindShopGoods",
    data:{
        shop_id:id
    }
})

export const LikeApi =_=>axios({
    url:"/ajax/Order/getRecommendGoods"
})

export const DingApi =(page,size)=>http.get({
    url:"/ajax/Order/getUserOrder",
    data:{  
        page,
        size
    }
})


//https://sjzmc.0xiao.com/Shop/getBindShopGoods?shop_id=82018


//https://tjbhzy.0xiao.com/Order/getRecommendGoods

//https://tjbhzy.0xiao.com/Shop/getPageListByShop?page_list_id=14059
//https://tjbhzy.0xiao.com/Shop/getBindShopGoods?shop_id=51393

//https://tjbhzy.0xiao.com/Order/getUserOrder?page=1&size=10