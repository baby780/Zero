import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { MainContent } from "./styled";
import {withRouter} from "react-router-dom";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class ListContent extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [
                { text: "下单必看", 
                imgSrc: "https://u2.0xiao.cn/0xiao/upload/badge/image/20191021/5dad5f6800dbd.png" ,
                path:""
                },
                { text: "清真四食堂",id:15841,
                path:"/canteen",
                imgSrc: "https://u2.0xiao.cn/0xiao/upload/site_item/image/20191115/5dce63fa185f5.png" },
                { text: "轻工二食堂",id:15934,
                path:"/canteen",
                imgSrc: "https://u2.0xiao.cn/0xiao/upload/site_item/image/20191115/5dce6331aec93.png" },
                { text: "加入我们",
                path:"",
                imgSrc: "https://u2.0xiao.cn/0xiao/upload/site_item/image/20190709/5d249c45dd2eb.jpeg" },
                { text: "天津轻工",
                path:"",
                imgSrc: "https://u2.0xiao.cn/0xiao/upload/site_item/image/20180815/5b73d0f3db83f.jpg" },
                { text: "校园全景",
                path:"",
                 imgSrc: "https://u2.0xiao.cn/0xiao/upload/badge/image/20190522/5ce4c477c132e.png" },
                { text: "表白墙",
                path:"",
                imgSrc: "https://u2.0xiao.cn/0xiao/upload/site_item/image/20191115/5dce6438552a8.png" },
                { text: "拼团组队",
                path:"",
                imgSrc: "https://u2.0xiao.cn/0xiao/upload/site_item/image/20191115/5dce647108c1e.png" },
            ],
            show:true,
        }
    }
    render() {
        let { homeList,shopList} = this.props;
        let { list,show} = this.state;
        return (
            <MainContent>
                <div className="first">
                    <a href="#">
                        <img src="https://u2.0xiao.cn/0ixao/upload/badge/image/20170923/59c6518ac586c.jpeg" />
                    </a>
                </div>
                <div className="slider_item">
                    {
                        list.map((item, index) => (
                            <div key={index} className="a" onClick={this.handleCanteen.bind(this,item)}>
                                <div>
                                    <img src={item.imgSrc} />
                                </div>
                                <span>{item.text}</span>
                            </div>
                        ))
                    }
                    <li>
                        
                    </li>
                </div>
                <div className="site_marquee">
                    <div className="must">
                        <i className="italic">站点公告:</i>
                    </div>
                    <div className="marquee_box">
                        <a href="#">下单必看</a>
                    </div>
                    <span className="iconfont icon">&#xe605;</span>
                </div>
                <div className="service_item">
                    <a href="#" className="first">
                        <img src="https://static.0xiao.com/Public/release/img/home/service_item_job-bd57dec68a.png" />
                        兼职登记
                            <p>校园兼职绕开黑中介</p>

                    </a>
                    <a href="#" className="second">
                        <img src="https://static.0xiao.com/Public/release/img/home/service_item_task-2576db02d8.png" />
                        众包任务
                            <p>校内任务接单赚钱</p>
                    </a>
                    <a href="#" className="three">
                        <img src="https://static.0xiao.com/Public/release/img/home/service_item_express-b8e0de77fe.png" />
                        代取快递
                            <p>代取代寄到宿舍</p>
                    </a>
                    <a href="#" className="four">
                        <img src="https://static.0xiao.com/Public/release/img/home/service_item_info-b49fe921d3.png" />
                        信息发布
                            <p>校内信息发布墙</p>
                    </a>
                </div>
                <div className="mend">
                    <span>
                        <b>精彩推荐</b>
                    </span>
                    <div>
                        <img src="https://u2.0xiao.cn/0ixao/upload/badge/image/20170925/59c8cb9f5cc32.jpeg" />
                    </div>
                </div>
                <span className="offer">
                    <b>天天特价</b>
                </span>
                <div className="site_sale">
                    <a href="#">
                        <img src="https://u2.0xiao.cn/3cfood_shop/license/image/5971318b2000064b.png!150-120" />
                        <p className="sale_goods_name">老爆三盖饭＋蜜汁柠檬茶</p>
                        <div>
                            <span className="ove">￥15</span>
                            <span className="cost">￥20</span>
                        </div>
                    </a>
                </div>
                <div className="hot_tag">
                    <li onClick={this.handleFood.bind(this)} className={show?'active':''}>推荐美食</li>
                    <li onClick={this.handleShop.bind(this)} className={show?'':'active'}>商店</li>
                </div>
                <ul style={{ display:show?'block':'none' }}>
                    {
                        homeList.map((text, index) => (
                            <li key={index} onClick={this.handleFoodsList.bind(this,text)}>
                                <div className="tiao">
                                    <img src={"https://u2.0xiao.cn" + text.info.pic_path} />
                                    <h2>{text.info.shop_name}</h2>
                                    <div className="clo1">
                                        <div>
                                            <i></i>
                                            <span>{text.info.star}</span>
                                        </div>

                                        月售：
                                    <span>{text.info.month_total}单</span>
                                    </div>
                                    <p className="ove clo2">
                                        起价：
                                    <span>￥{text.info.min_price}</span>
                                        配送：
                                    <span>￥0</span>
                                    </p>
                                    <p className="ove clo3">
                                        <i></i>
                                        {text.info.description}
                                    </p>
                                    <p className="ove address">
                                        <i></i>
                                        {text.info.address}
                                    </p>
                                    <span className="iconfont open" style={{ display: text.info.shop_state==1?'block':'none' }}>&#xe63c;</span>
                                    <span className="close" style={{ display: text.info.shop_state==3?'block':'none' }}>暂停中</span>
                                    <span className="school">校园专送</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <ul style={{ display:show?'none':'block' }}>
                    {
                        shopList.map((shop, ind) => (
                            <li key={ind}>
                                <a href="#">
                                    <img src={shop.info.pic_path} />
                                    <h2>{shop.info.shop_name}</h2>
                                    <div className="clo1">

                                        月售：
                                    <span>{shop.info.month_total}单</span>
                                    </div>
                                    <span className="iconfont open" style={{ display: shop.state==1?'block':'none' }}>&#xe63c;</span>
                                    <span className="close" style={{ display: shop.state==0?'block':'none' }}>暂停中</span>
                                </a>
                            </li>
                        ))

                    }

                </ul>

                <span className="user_service"></span>
            </MainContent>
        )
    }
    componentDidMount() {
        this.props.handleAsyncList()
    }
    handleFood(){
        this.setState({
            show:true
        })
        this.props.handleAsyncList()
    }
    handleShop() {
        this.setState({
            show:false
        })
        this.props.handleShopList()
    }
    handleFoodsList(info){
        this.props.history.push("/food/"+info.shop_id)
    }
    handleCanteen(item){
        this.props.history.push(item.path+"/"+item.id+"/"+item.text)
    }
}
export default ListContent