import React,{Component}from "react";
import {TabBarRouter} from "../../router/index_szd";
import {FooterContent} from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        let {path} = this.props;
        return(
            <FooterContent>
                {      
                    TabBarRouter.map((item) => (
                        <li key={item.path} className={path===item.path?'active':""} onClick={this.handleClick.bind(this,item.path)}>
                            <span className="iconfont icon">{item.icon}</span>
                            <span className="home">{item.text}</span>
                        </li>
                    ))
                }
            </FooterContent>
        )
    }
    handleClick(path){
        this.props.history.push(path);
    }
}
export default Footer;