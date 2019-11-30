import {headlines,homepage,member,paid,login} from "../pages"

export const TabBar=[
    {
        path:"/homepage",
        component:homepage,
        text:"首页",
        icon:"\ue62a",
        meta:{
            requiredAuth:false,
            flag:true
        },
  
    },
    {
        path:"/paid",
        component:paid,
        text:"有偿投稿",
        icon:"\ue662",
        meta:{
            requiredAuth:false,
            flag:true
        }
    },
    {
        path:"/headlines",
        component:headlines,
        text:"头条",
        icon:"\ue6db",
        meta:{
            requiredAuth:false,
            flag:true
        }
    },
    {
        path:"/member",
        component:member,
        text:"会员",
        icon:"\ue602",
        meta:{
            flag:true,
            requiredAuth:false

        }
    },
]
export const NoTabBar=[
    
        {
            path:"/login",
            component:login
        }
    
]
export const ConfigRouter=TabBar.concat(NoTabBar)

