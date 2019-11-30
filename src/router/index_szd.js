import {
    Home,Message,Mine,Login
}from "pages"

export const TabBarRouter = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        text:"首页",
        icon: "\ue62a",
    },
    {
        path:"/message",
        component:Message,
        meta:{
            flag:true
        },
        text:"信息",
        icon: "\ue6db",
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:false,
            requiredAuth:true
        },
        text:"会员",
        icon: "\ue602",
    },
];
export const NoTabBarRouter=[
    {
        path:"/login",
        component:Login,
        meta:{
            
        },
    },
];
export const RouterConfig = TabBarRouter.concat(NoTabBarRouter)