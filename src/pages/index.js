import Loadable from "react-loadable";
import Loading from "components/loading/index.js";


export const Dian =Loadable({
    loader:_=>import("./dian/Bohai"),
    loading:Loading
})
export const Login =Loadable({
    loader:_=>import("./login/Bohai"),
    loading:Loading
})
export const Mine =Loadable({
    loader:_=>import("./mine/Bohai"),
    loading:Loading
})
export const Order =Loadable({
    loader:_=>import("./order/Bohai"),
    loading:Loading
})
export const Zero =Loadable({
    loader:_=>import("./zero/Bohai"),
    loading:Loading
})

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


