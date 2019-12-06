import React from "react";
import {LoginContent} from "./styled";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            usernameVal:"",
            passwordVal:""
        }
    }
    render(){
        return(
            <div className="Login">
                <LoginContent>
                    <img src="https://static.0xiao.com/Public/release/img/login_logo-8af90698a3.png"/>
                    <div className="contentinput">
                    <input type="text"  className="phone_login_input" placeholder="手机账号" onChange={this.handleUsername.bind(this)}/>
                    <input type="password" className="phone_login_input" placeholder="用户密码" onChange={this.handlePassword.bind(this)}/>
                    <button  className="phone_login_button" onClick={this.handleLogin.bind(this)}>登 录</button>
                    <span className="active_t" >手机验证码快捷登录</span>
                    </div>
                    <div className="contentbotton">
                    <span className="open_join_tit">更多快捷登录/注册</span>
                    </div>
                </LoginContent>
            </div>
        )
    }
    handleUsername(e){
        let val = e.target.value
        this.setState({
            usernameVal:val
        })
    }
    handlePassword(e){
        let val = e.target.value
        this.setState({
            passwordVal:val
        })
    }
    handleLogin(){
        //console.log(this.state)
        this.props.handleAsyncLogin(this.state.usernameVal,this.state.passwordVal)
    }
}


    

export default Login

