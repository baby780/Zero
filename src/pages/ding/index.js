import React from "react";
import { HashRouter, Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
import {DingTop,DingConent,DingBotton,Dingss} from "./styled.js"
import { withRouter } from 'react-router-dom'
@withRouter
class Ding extends React.Component{
    constructor(){
        super()
    }


    render(){
        let foods=JSON.parse(localStorage.getItem("food"))
        console.log(foods);
        return(
            <div className="Ding">
                <DingTop>
                    <i className="iconfont icon-zuo1" onClick={this.handleTo.bind(this)}></i>
                    <p>订单结算·提交下单</p>
                    <i></i>
                </DingTop>
                <DingConent>
                    <ul>
                        {
                            foods.map((item)=>(
                            <li key={item.id}>
                                <h3>{item.name}</h3>
                                <p><i>¥{item.price}</i><span>×{item.num}</span></p>
                            </li>
                            ))
                        }
                       
                       
                    </ul>
                </DingConent>

                <DingBotton>
                        <ul>
                            <li>   
                           
                                小计:
                                <p className="right"> 
                                <span className="clo9">
                                    <em className="sort_count">3</em>样
                                    <em className="all_count">3</em>份
                                </span>
                                <span className="red">¥ 
                                <em className="subtotal_price">28</em>
                                </span>
                                </p>
                            </li>
                            <li>  
                           
                                打包:
                                <p className="right">  
                                <span className="clo9">
                                    餐盒/包装
                                </span>
                                <span className="red">+ 
                                <em className="subtotal_price">0</em>
                                </span>
                                </p>
                            </li>
                            <li>    
                                配送:
                                <p className="right">
                                <span className="clo9">
                                    0km
                                </span>
                                <span className="red">+ 
                                <em className="subtotal_price">0</em>
                                </span>
                                </p>
                             
                            </li>
                            <li>    
                                应付总计：
                               
                                <span className="red">¥ 
                                <em className="subtotal_price">28</em>
                                </span>
                              
                            </li>
                           
                        </ul>
                </DingBotton>
                <Dingss>
                <button  className="phone_login_button">提交订单</button>
                </Dingss>
            </div>
        )
    }
    handleTo() {
        this.props.history.goBack();
      }
}

export default Ding;