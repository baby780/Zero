import React, { Fragment } from "react";
import { BohaiTop, BohaiContent, BohaiBanner, BohaiNav, BohaiNotice, BohaiSubfield, BohaiSpecial } from "./styled"
/* import store from "../../store"
import {getBoahiAction} from "../../actions/bohaiAction.js"; */
import { HashRouter, Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
import BohaiStores from "components/Bohaistore";
import { Carousel, WingBlank } from 'antd-mobile';
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "../../components/Bohaistore/mapStore"
@connect(mapStateToProps,mapDispatchToProps)

class Bohai extends React.Component {
    constructor() {
        super();
        this.state = {
            ScrollTop: "",
            imgHeight: 176,
            shop: [{
                "id":51393,
                "image":"https://u2.0xiao.cn/0ixao/upload/badge/image/20171013/59e081279b126.png",
                "name":"零食超市"
            },
            {
                "id":87909,
                "image":"https://u2.0xiao.cn/0xiao/upload/site_item/image/20191105/5dc1820fa44b3.png",
                "name":"宅急快药"
            },
            {
                "id":53224,
                "image":"https://u2.0xiao.cn/0ixao/upload/badge/image/20170926/59c9a53dd5f62.png",
                "name":"新鲜水果"
            },
            {
                "id":88990,
                "image":"https://u2.0xiao.cn/0xiao/upload/site_item/image/20191008/5d9ca4a5ac2b6.png",
                "name":"蛋糕店"
            }
        ],
        show:false,
       
        }
    }
    render() {
        let { ScrollTop,shop,show} = this.state;
        /* console.log(indexZero,indexZeroTwo,indexZeroThree); */
        return (
            <div className="Bohai" >
                {/* 头部 */}
                <BohaiTop>
                    <ul className="left">
                        <li>
                            <i className="iconfont icon-location"></i>
                        </li>
                        <li>天津渤海职业技术学院</li>
                    </ul>
                    <ul className="right">
                        <span className="iconfont icon-xingtaiduICON_sousuo---copy">搜索</span>
                        <img src="https://static.0xiao.com/Public/release/img/home/site_ring-3d26425f8f.png" />
                    </ul>
                </BohaiTop>
                <BohaiContent onScroll={this.handleScroll.bind(this)} ref="bodyBox">
                    <a className="abbr"></a>
                    <a className="iconfont icon-paixu" style={{ display: ScrollTop ? 'block' : 'none' }}  onClick={this.handleTodo.bind(this)}>
                    <div className="rank" style={{display:show?"block":"none"}}>
                        <li onClick={this.handleChange.bind(this,0)}>默认排序</li>
                        <li onClick={this.handleChange.bind(this,1)}> 营业状态</li>
                        <li onClick={this.handleChange.bind(this,2)}>单量排序</li>

                    </div>
                    </a>
                    {/* */}
                   
                    {/* 广告 */}


                    <BohaiBanner>


                        <WingBlank>
                            <Carousel
                                autoplay={true}
                                infinite={true}

                            >


                                <img
                                    src="https://u2.0xiao.cn/0xiao/upload/core/slide/image/20191105/5dc183c8e32fc.png"
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                <img
                                    src="https://u2.0xiao.cn/0xiao/upload/core/slide/image/20191111/5dc97464ccb32.jpg"
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                <img
                                    src="https://u2.0xiao.cn/0xiao/upload/core/slide/image/20191110/5dc82541a43d8.jpg"
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                <img
                                    src="https://u2.0xiao.cn/0xiao/upload/core/slide/image/20191117/5dd0acc4d4ea8.jpg"
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                <img
                                    src="https://u2.0xiao.cn/0xiao/upload/core/slide/image/20191124/5dda9b2c98a5d.jpg"
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />


                            </Carousel>
                        </WingBlank>

                    </BohaiBanner>
                    {/* 导航 */}
                    <BohaiNav>

                        <HashRouter>
                        {/* */}
                            {
                                shop.map((item)=>(
                                <Link to={"/dian/"+item.id} key={item.id}>
                                    <img src={item.image} />
                                    <p>{item.name}</p>
                                </Link >
                                ))
                            }
                            <a>
                                <img src="https://u2.0xiao.cn/0xiao/upload/badge/image/20180319/5aaf9d4011ed7.png" />
                                <p>驾校招生</p>
                            </a>
                            <a>
                                <img src="https://u2.0xiao.cn/0ixao/upload/badge/image/20170927/59cb09cb9dc32.png" />
                                <p>校园跑腿</p>
                            </a>
                            <a>
                                <img src="https://u2.0xiao.cn/0xiao/upload/badge/image/20180721/5b52b0d387020.png" />
                                <p>渤海表白墙</p>
                            </a>
                            <a>
                                <img src="https://u2.0xiao.cn/0ixao/upload/badge/image/20170927/59cb08cda6e49.jpg" />
                                <p>加入我们</p>
                            </a>

                            <a>
                                <img src="https://u2.0xiao.cn/0xiao/upload/badge/image/20180812/5b6f9881b5f4d.png" />
                                <p>下单必看</p>
                            </a>

                            <a>
                                <img src="https://u2.0xiao.cn/0xiao/upload/badge/image/20190710/5d2540a732316.png" />
                                <p>投诉建议</p>
                            </a>
                        </HashRouter>

                    </BohaiNav>
                    {/* 公告 */}
                    <BohaiNotice>
                        <span>站点公告</span>
                        <span>零点校园服务平台始终是您的贴身生活助手</span>
                        <span className="iconfont icon-zuo"></span>
                    </BohaiNotice>
                    <BohaiSubfield>
                        <span>
                            <img src="https://static.0xiao.com/Public/release/img/home/service_item_express-b8e0de77fe.png" />
                            <div className="right_box">
                                <a>代取快递</a>
                                <p>代取代寄到宿舍</p>
                            </div>
                        </span>
                        <span>
                            <img src="https://static.0xiao.com/Public/release/img/home/service_item_info-b49fe921d3.png" />
                            <div className="right_box">
                                <a>消息发布</a>
                                <p>校内信息发布墙</p>
                            </div>

                        </span>
                    </BohaiSubfield>
                    <BohaiSpecial>
                        <p>
                            <b>天天特价</b>
                        </p>
                        <ul>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood/listlogo/image/20160502/572724e93b71d.jpg!150-120" />
                                <a>照烧鸡盖饭</a>
                                <div className="pirce">
                                    <span>￥10</span>
                                    <span>¥13</span>
                                </div>

                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/1a0ce792bc10152f.png!150-120" />
                                <a>招牌珍珠奶茶</a>
                                <div className="pirce">
                                    <span>￥5</span>
                                    <span>¥8</span>
                                </div>

                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/cd5dbd136084ae94.png!150-120" />
                                <a>鸡蛋卷菜饼加肠</a>
                                <div className="pirce">
                                    <span>￥3.99</span>
                                    <span>¥6</span>
                                </div>

                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood/listlogo/image/t_22299a0cfc29aaad.jpg!150-120" />
                                <a>照烧鸡盖饭</a>
                                <div className="pirce">
                                    <span>￥3.99</span>
                                    <span>¥6</span>
                                </div>

                            </li>
                        </ul>
                    </BohaiSpecial>



                    <BohaiStores />

                </BohaiContent>
            </div>
        )
    }
    handleScroll() {
        let height = this.refs.bodyBox.scrollTop;
        if (height > 1000) {
            this.setState({
                ScrollTop: height
            })
        } else {
            this.setState({
                ScrollTop: ""
            })
        }
    }
    componentDidMount() {
        this.handleSetime();
     
    }
    handleSetime() {
        setTimeout(() => {
           
        }, 100);
    }
    handleTodo(){
        this.setState({
            show:!this.state.show
        })
        
    }
    handleChange(index){
       this.props.handleAsyncZero(index);
       this.props.handleAsyncTwoZero(index);
       this.props.handleAsyncThreeZero(index);
    }
   


}

export default Bohai;