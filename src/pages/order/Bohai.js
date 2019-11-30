import React from "react";
import {OrderContent,Orderlike} from "./styled"
class Order extends React.Component{
    render(){
        return( 
            <div className="Order">
                <OrderContent>
                    <ul className="Order_list">
                        <li>
                            <h2>零点校园<i className="iconfont icon-zuo"></i></h2>
                            <p>订单：<a>点击查看>></a></p>
                            <p>总计：<b>￥13.7</b>——<span className="green">已完成</span></p>
                            <p>支付：<span className="green">在线支付</span></p>
                            <p className="botton">时间：2019-06-24 21:04:24<a className="iconfont icon-paobu">查进程</a></p>
                            <button>点 评</button>
                        </li>
                        <li>
                            <h2>零点校园<i className="iconfont icon-zuo"></i></h2>
                            <p>订单：<a>点击查看>></a></p>
                            <p>总计：<b>￥13.7</b>——<span className="green">已完成</span></p>
                            <p>支付：<span className="green">在线支付</span></p>
                            <p className="botton">时间：2019-06-24 21:04:24<a className="iconfont icon-paobu">查进程</a></p>
                            <button>点 评</button>
                        </li>
                    </ul>
                    <Orderlike>
                        <h2>猜你喜欢:</h2>
                        <div className="list">
                                <a>
                                    <img src="https://u2.0xiao.cn/3cfood_shop/license/image/f6ea3e51ff0969c0.png"/>
                                    <p>柠檬养乐多</p>
                                    <i>￥10</i>
                                </a>
                                <a>
                                    <img src="https://u2.0xiao.cn/3cfood_shop/license/image/f6ea3e51ff0969c0.png"/>
                                    <p>柠檬养乐多</p>
                                    <i>￥10</i>
                                </a>
                                <a>
                                    <img src="https://u2.0xiao.cn/3cfood_shop/license/image/f6ea3e51ff0969c0.png"/>
                                    <p>柠檬养乐多</p>
                                    <i>￥10</i>
                                </a>
                                <a>
                                    <img src="https://u2.0xiao.cn/3cfood_shop/license/image/f6ea3e51ff0969c0.png"/>
                                    <p>柠檬养乐多</p>
                                    <i>￥10</i>
                                </a>
                                <a>
                                    <img src="https://u2.0xiao.cn/3cfood_shop/license/image/f6ea3e51ff0969c0.png"/>
                                    <p>柠檬养乐多</p>
                                    <i>￥10</i>
                                </a>
                                <a>
                                    <img src="https://u2.0xiao.cn/3cfood_shop/license/image/f6ea3e51ff0969c0.png"/>
                                    <p>柠檬养乐多</p>
                                    <i>￥10</i>
                                </a>
                                
                        </div>
                    </Orderlike>
                </OrderContent>
            </div>
        )
    }
}

export default Order;