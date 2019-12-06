import React, { Component } from "react"
import { BohaiStore } from "./styled"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import { HashRouter, Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
@connect(mapStateToProps,mapDispatchToProps)
class BohaiStores extends Component {
    constructor(){
        super()
        this.state={
           btn:["特色美食","面类盖饭","饮品烧烤"],
           activeIndex:0,
          
        }
    }
    render() {
        let {ZeroTwo,ZeroThree,Zero}=this.props;
        let {btn,activeIndex}=this.state;
        return (
            <BohaiStore>
                <div className="content_top">
                        {
                              btn.map((item,index)=>(
                                  <li key={index}  onClick={this.handleToglle.bind(this,index)} className={activeIndex==index?"activess":""}>{item}</li>
                              ))
                         } 
                    </div>
                <ul className="content"> 
              
                {
                    Zero.map((item)=>(
                      /*   <Link to={"/dian/"+item.shop_id} > */
                      /* ,name:item.info.shop_name,img:item.info.pic_path,total:item.info.month_total,star:item.info.star,address:item.info.address */
                       <Link to={{pathname:"/dian/"+item.shop_id,query:{id:item.shop_id,name:item.info.shop_name,img:item.info.pic_path,total:item.info.month_total,star:item.info.star,address:item.info.address}}} key={item.shop_id} style={{display:0==activeIndex?'flex':'none'}} >
                        <span className="left">
                            <img src={'https://u2.0xiao.cn'+item.info.pic_path} />
                           
                        </span>
                        <span className="right">
                            <i className={item.info.state==0?"iconfont icon-yingyezhongyingyeshijianicon" :"iconfont icon-dayang"}></i>
                            <h2>{item.info.shop_name}</h2>
                            <p>
                                <em className="iconfont icon-xing"></em><b>{item.info.star}</b>
                                月售：
                        <span>{item.info.month_total}单</span>
                            </p>
                            <p>
                                起价: <span>￥{item.info.min_price}</span> 配送:<span>￥0</span>
                            </p>
                            <p className="iconfont icon-dian-copy ">
                                {item.info.description}
                            </p>
                            <p className="iconfont icon-location"> {item.info.address}</p>
                        </span>
                        </Link>
                  
                        ))
                    }  
                     {
                       ZeroTwo.map((item)=>(
                        <Link to={{pathname:"/dian/"+item.shop_id,query:{id:item.shop_id,name:item.info.shop_name,img:item.info.pic_path,total:item.info.month_total,star:item.info.star,address:item.info.address}}} key={item.shop_id} style={{display:1==activeIndex?'flex':'none'}} >
                        <span className="left">
                        {/* item.info.pic_path */}
                            <img src={'https://u2.0xiao.cn'+item.info.pic_path} />
                           
                        </span>
                        <span className="right">
                            <i className={item.info.state==0?"iconfont icon-yingyezhongyingyeshijianicon" :"iconfont icon-dayang"}></i>
                            <h2>{item.info.shop_name}</h2>
                            <p>
                                <em className="iconfont icon-xing"></em><b>{item.info.star}</b>
                                月售：
               <span>{item.info.month_total}单</span>
                            </p>
                            <p>
                                起价: <span>￥{item.info.min_price}</span> 配送:<span>￥0</span>
                            </p>
                            <p className="iconfont icon-dian-copy ">
                                {item.info.description}
                            </p>
                            <p className="iconfont icon-location"> {item.info.address}</p>
                        </span>
                        </Link>
                        ))
                    }  
                   {
                       ZeroThree.map((item)=>(
                        <Link to={{pathname:"/dian/"+item.shop_id,query:{id:item.shop_id,name:item.info.shop_name,img:item.info.pic_path,total:item.info.month_total,star:item.info.star,address:item.info.address}}} key={item.shop_id} style={{display:2==activeIndex?'flex':'none'}} >
                        <span className="left">
                        {/* item.info.pic_path */}
                            <img src={'https://u2.0xiao.cn'+item.info.pic_path} />
                           
                        </span>
                        <span className="right">
                            <i className={item.info.state==0?"iconfont icon-yingyezhongyingyeshijianicon" :"iconfont icon-dayang"}></i>
                            <h2>{item.info.shop_name}</h2>
                            <p>
                                <em className="iconfont icon-xing"></em><b>{item.info.star}</b>
                                月售：
               <span>{item.info.month_total}单</span>
                            </p>
                            <p>
                                起价: <span>￥{item.info.min_price}</span> 配送:<span>￥0</span>
                            </p>
                            <p className="iconfont icon-dian-copy ">
                                {item.info.description}
                            </p>
                            <p className="iconfont icon-location"> {item.info.address}</p>
                        </span>
                        </Link>
                        ))
                    }  
                    
                </ul> 
            </BohaiStore>

        )
    }
    componentDidMount(){
        this.props.handleAsyncZero();

        this.props.handleAsyncTwoZero();

        this.props.handleAsyncThreeZero();
    }
    handleToglle(index){
        this.setState({
            activeIndex:this.activeIndex=index
        })
      
    }
   
}

export default BohaiStores

/* 

<li>
                            <span>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/bc0a23a2be83b334.jpeg" />
                            </span>
                            <span>
                                <i className="iconfont icon-yingyezhongyingyeshijianicon"></i>
                                <h2>王亿花甲粉（渤海职业学院店）</h2>
                                <p>
                                    <em className="iconfont icon-xing"></em><b>4.2</b>
                                    月售：
                   <span>1861单</span>
                                </p>
                                <p>
                                    起价: <span>￥10</span> 配送:<span>￥0</span>
                                </p>
                                <p className="iconfont icon-dian-copy ">
                                    下午有课的同学请提前订餐，11点30以后订餐的，时间不确定，不出意外12点半之前可送到，请勿催单，感谢理解
                                </p>
                                <p className="iconfont icon-location"> 天津渤海职业技术学院</p>
                            </span>
                        </li>
*/