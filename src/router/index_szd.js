import {
    Home,Message,Mine,Login,Search,Food,Canteen
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
        text:"头条",
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
    {
        path:"/search",
        component:Search,
        meta:{
            flag:false
        }
    },
    {
        path:"/food/:id",
        component:Food,
        meta:{
            flag:false
        }

    },
    {
        path:"/canteen/:id/:name",
        component:Canteen,
        meta:{
            flag:true
        }

    }
];
export const RouterConfig = TabBarRouter.concat(NoTabBarRouter)