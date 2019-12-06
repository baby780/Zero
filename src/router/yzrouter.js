import {list,headlines,search,homepage,member,toutiao,paid,login,school,recommend,comprehensive,detail} from "../pages"

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
        children:[
            {
                path:"/homepage/school",
                component:school,
                text:"校园外卖",
                meta:{
                    requiredAuth:false,
                    flag:true
                },
            },
            {
                path:"/homepage/recommend",
                component:recommend,
                text:"优选推荐",
                meta:{
                    requiredAuth:false,
                    flag:true
                },
            },
            {
                path:"/homepage/comprehensive",
                component:comprehensive,
                text:"综合排序",
                meta:{
                    requiredAuth:false,
                    flag:true
                },
            },
        ]
  
    },
    {
        path:"/paid",
        component:paid,
        text:"有偿投稿",
        icon:"\ue662",
        meta:{
            requiredAuth:false,
            flag:false
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
        },
        {
            path:"/list/:id/:name",
            component:list,
            meta:{
                flag:false
            }
        },{
            path:"/detail",
            component:detail,
            meta:{
                
            }
        },
        {
            path:"/toutiao",
            component:toutiao,
            meta:{
                
            }
        },
        {
            path:"/search",
            component:search,
            meta:{
               
            }
        },
    
]
export const ConfigRouter=TabBar.concat(NoTabBar)

