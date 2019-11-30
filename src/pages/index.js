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
