import Loadable from "react-loadable";
import Loading from "../common/loading"


export const homepage = Loadable({
    loader: () => import("./homepage/yzhome"),
    loading: Loading
})
export const paid = Loadable({
    loader: () => import("./paid/yzpaid"),
    loading: Loading
})


export const headlines = Loadable({
    loader: () => import("./headlines/yzhead"),
    loading: Loading
})
export const member = Loadable({
    loader: () => import("./member/yzmember"),
    loading: Loading
})
export const login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})
export const comprehensive=Loadable({
    loader:()=>import("./comprehensive/yzcomprehensive"),
    loading:Loading
})
export const recommend=Loadable({
    loader:()=>import("./recommend/yzrecommend"),
    loading:Loading
})

export const school=Loadable({
    loader:()=>import("./school/yzschool"),
    loading:Loading
})
export const list=Loadable({
    loader:()=>import("./list/yzlist"),
    loading:Loading
})
export const detail=Loadable({
    loader:()=>import("./detail/yzdetail"),
    loading:Loading
})