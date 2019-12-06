import React from "react";
import {OrderContent,Orderlike} from "./styled";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps)
class Order extends React.Component{
    render(){
        let {Like,Ding}=this.props;
        return( 
            <div className="Order">
                <OrderContent>
                    <ul className="Order_list">
                        {
                            Ding?Ding.map((item,index)=>(
                            <li key={index}>
                                <h2>{item.shop_name}<i className="iconfont icon-zuo"></i></h2>
                                <p>订单：<a>点击查看>></a></p>
                                <p>总计：<b>￥{item.actual_price}</b>——<span className="green">已完成</span></p>
                                <p>支付：<span className="green">在线支付</span></p>
                                <p className="botton">时间：{item.create_time}<a className="iconfont icon-paobu">查进程</a></p>
                                <button>点 评</button>
                            </li>
                            )):''
                        }
                       
                       
                    </ul>
                    <Orderlike>
                        <h2>猜你喜欢:</h2>
                        <div className="list">
                            {
                                Like?Like.map((item)=>(
                                    <a key={item.goods_id}>
                                    <img src= {'https://u2.0xiao.cn'+item.goods_path}/>
                                    <p>{item.goods_name}</p>
                                    <i>￥{item.price}</i>
                                    </a>
                                )):''
                            }
                               
                               
                                
                        </div>
                    </Orderlike>
                </OrderContent>
            </div>
        )
    }
    componentDidMount(){
        this.props.handleAsyncLike();
        this.props.handleAsyncDing(1,10);
    }
}

export default Order;



/* 


*/