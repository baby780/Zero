import Loadable from "react-loadable";
import Loading from "common/loading";

export const Home = Loadable({
    loader:_=>import("./szd_home"),
    loading:Loading
})
export const Message = Loadable({
    loader:_=>import("./szd_message"),
    loading:Loading
})
export const Mine = Loadable({
    loader:_=>import("./szd_mine"),
    loading:Loading
})

export const Login = Loadable({
    loader:_=>import("./szd_login"),
    loading:Loading
})