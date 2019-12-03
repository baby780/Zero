import React,{Component} from "react";

import {TabBarRoute} from "router";

import {withRouter} from "react-router-dom";

import "./Bohai.css"



class TabBar extends Component{
    constructor(){
        super()
        
        this.state={
            activeIndex:0
        }
    }
    render(){
        let {path} = this.props;
        return(
            <div id="footer">
                <ul>
                    {
                       TabBarRoute.map((item)=>(
                        <li key={item.path} onClick={this.handleTo.bind(this,item.path)} className={path===item.path?'active':""}>
                             <i className="iconfont">{item.icon}</i>
                             <span>{item.text}</span>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
    handleTo(path){
        this.props.history.push(path);
    }
}


export default withRouter(TabBar);