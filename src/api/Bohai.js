import http from "utils/request";

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


//https://tjbhzy.0xiao.com/Shop/getPageListByShop?page_list_id=14059