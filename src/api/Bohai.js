import http from "utils/request";

export const ZeroApi = (page_list_id=14059)=>http.get({
    url:"/ajax/Shop/getPageListByShop",
    data:{
        page_list:page_list_id
    }
})

//https://tjbhzy.0xiao.com/Shop/getPageListByShop?page_list_id=14059