import React from "react";
import {LoginContent} from "./styled";
class Login extends React.Component{
    render(){
        return(
            <div className="Login">
                <LoginContent>
                    <img src="https://static.0xiao.com/Public/release/img/login_logo-8af90698a3.png"/>
                    <div className="contentinput">
                    <input type="text" name="tel" className="phone_login_input" placeholder="手机账号"  />
                    <input type="password" name="password" className="phone_login_input" placeholder="用户密码" />
                    <button  className="phone_login_button">登 录</button>
                    <span className="active_t" >手机验证码快捷登录</span>
                    </div>
                    <div className="contentbotton">
                    <span className="open_join_tit">更多快捷登录/注册</span>
               {/*      <li>
                        <a><img src=""/></a>
                        <a></a>
                        <a></a>
                    </li> */}
                    </div>
                </LoginContent>
            </div>
        )
    }
}


export default Login