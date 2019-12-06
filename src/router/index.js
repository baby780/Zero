import {
    Login,
    Mine,
    Order,
    Zero,
    Dian,
    Ding
} from "pages"



export const TabBarRoute=[
    {
        path:"/Bohai",
        component:Zero,
        text:"首页",
        meta:{
            flag:true
        },
        icon:"\ue62a",
    },
    {
        path:"/kefu",
        component:Zero,
        text:"客服中心",
        meta:{
            flag:true
        },
        icon:"\ue62b",
    },
    {
        path:"/order",
        component:Order,
        text:"订单",
        meta:{
            flag:true
        },
        icon:"\ue6db",
    },
    {
        path:"/mine",
        component:Mine,
        text:"我的",
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue602",
    },
    
]


export const NoTabBarRoute=[
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {   
        path:"/dian/:id",
        component:Dian,
        meta:{}
    },
    {
        path:"/ding",
        component:Ding,
        meta:{}
    }
];


export const RouteConfig=TabBarRoute.concat(NoTabBarRoute);