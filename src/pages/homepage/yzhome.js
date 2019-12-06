import React, { Component } from "react"
import { PageContainer } from "common/styled/yzindex"
import { Yihome } from "./yzhomestyled";
import { Carousel, WingBlank } from 'antd-mobile';

import { withRouter } from "react-router-dom"
import { TabBar } from "router/yzrouter";
import { NavLink } from "react-router-dom";
import Betterscroll from "common/yzbscroll"
@withRouter

class homepage extends Component {
    constructor() {
        super()
        this.state = {
            data: ['https://u2.0xiao.cn/0xiao/upload/core/slide/image/20190915/5d7e577c21649.jpg',
                'https://u2.0xiao.cn/0xiao/upload/core/slide/image/20191010/5d9e089877e2f.jpg',
                'https://u2.0xiao.cn/0xiao/upload/core/slide/image/20191014/5da4969ecb0a5.jpg'],
            imgHeight: 176,
        }
    }
    render() {
        
       
        return (
          
             
                    <Yihome>

                    <div id="header">
                        <p className="iconfont icon-location">石家庄医学高等专科学校</p>

                        <span  onClick={this.handle.bind(this)}>
                            <h2 className="iconfont icon-xingtaiduICON_sousuo---copy"></h2>
                            <h3>搜索</h3>
                        </span>
                        <a href="#">
                            <img src="https://static.0xiao.com/Public/release/img/home/site_ring-3d26425f8f.png" />
                        </a>
                    </div>
                    <div className="scro">
                        <div id="banner">
                            <WingBlank>
                                <Carousel
                                    autoplay={true}
                                    infinite={true}
                                   
                                >
                                    {this.state.data.map(val => (
                                        <a
                                            key={val}
                                            href="http://www.alipay.com"
                                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                        >
                                            <img
                                                src={`${val}`}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                    // fire window resize event to change height
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))}
                                </Carousel>
                            </WingBlank>
                        </div>
                        <div id="center">
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/badge/image/20181228/5c25970a21a4a.png" />
                                <p>校园头条</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/site_item/image/20190616/5d054f4b11e4a.png" />
                                <p>校花校草</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/site_item/image/20190830/5d68943963659.png" />
                                <p>快递服务</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/badge/image/20180327/5aba00b3d4cb5.png" />
                                <p>美食代送</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/site_item/image/20190704/5d1e005bd77f7.jpeg" />
                                <p>校园社团</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/site_item/image/20190603/5cf4f8ac5a024.jpeg" />
                                <p>表白墙</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/site_item/image/20190621/5d0c4ad6d5b2f.jpeg" />
                                <p>兼职登记</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/site_item/image/20190813/5d528b04bab86.png" />
                                <p>任务大厅</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0xiao/upload/site_item/image/20190709/5d247310abf89.png" />
                                <p>跳蚤市场</p>
                            </a>
                            <a herf="#">
                                <img src="https://u2.0xiao.cn/0ixao/upload/badge/image/20170927/59cb08cda6e49.jpg" />
                                <p>商家入驻</p>
                            </a>
                        </div>
                        <div className="nav">
                            <p>站点公告:</p>
                            <h6>石医专首届校花校草评选活动进行中</h6>
                            <span className="iconfont icon-zuo"></span>
                        </div>
                        <div className="yh">
                            <div></div>
                            <p>
                                <b>招行大学生信用卡</b>

                            </p>
                            <img src="https://u2.0xiao.cn/0xiao/masterad/image/20191014/5da49869927aa.jpg" />
                            <img src="https://u2.0xiao.cn/0xiao/upload/badge/image/20181015/5bc4566b50e7f.jpg" />
                        </div>
                        <div className="tejia">
                    <div></div>
                    <p>
                        <span>天天特价</span>
                        <a>更多></a>
                    </p>
                    <div className="ovh">
                        <a>
                            <img src="https://u2.0xiao.cn/3cfood/listlogo/image/t_1e0ce983c4a87024.jpeg!150-120" />
                            <p className="p1">薯香三杯鸡</p>
                            <p className="p2">
                                <span>￥12</span>
                                <del>￥13</del>
                            </p>
                        </a>
                        <a>
                            <img src="https://u2.0xiao.cn/3cfood/listlogo/image/t_d36696d136982848.jpeg!150-120" />
                            <p className="p1">单人套餐+送米饭</p>
                            <p className="p2">
                                <span>￥18</span>
                                <del>￥18</del>
                            </p>
                        </a>
                        <a>
                            <img src="https://u2.0xiao.cn/3cfood/listlogo/image/t_a607faa30fb3976f.jpg!150-120" />
                            <p className="p1">番茄蛋炒刀削</p>
                            <p className="p2">
                                <span>￥12</span>
                                <del>￥13</del>
                            </p>
                        </a>
                        <a>
                            <img src="https://u2.0xiao.cn/3cfood/listlogo/image/t_ed525e0c1d1fe1a7.jpeg!150-120" />
                            <p className="p1">经典米线</p>
                            <p className="p2">
                                <span>￥10</span>
                                <del>￥10 </del>
                            </p>
                        </a>
                    </div>
                </div>
                <div className="con">
                    <ul>
                        {
                            TabBar[0].children.map((item, index) => (
                                <li key={item.path}>
                                    <NavLink to={item.path}>
                                        <span>{item.text}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                    {/* 数据渲染 */}



                    </div>
                    
                    </Yihome>
               
           
        )
    }
    handle(){
        this.props.history.push("/search")
    }
}

export default homepage
