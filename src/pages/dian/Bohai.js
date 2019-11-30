import React from "react";
import {DianZong,DianHeader,DianTop,DianTopBox,DianSan,DianContent,DianButton} from "./styled";
import { withRouter } from 'react-router-dom'
class Dian extends React.Component{
    render(){
        return(
            <div className="Dian">
                <DianZong>
                <DianHeader>
                    <div className="left">
                        <i  onClick={this.handleTo.bind(this)} className="iconfont icon-zuo1"></i>
                    </div>
                    <div className="right">
                        <i className="iconfont icon-xingtaiduICON_sousuo---copy"></i>
                        <i className="iconfont icon-dianhua"></i>
                        <i className="iconfont icon-fenxiang1"></i>
                    </div>
                </DianHeader>
                  <DianTop>
                      
                      
                  </DianTop>
                  <DianTopBox>
                            <div className="shop_info">
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/ec662f512e955873.jpeg"/> 
                                <h2>零点校园</h2>
                                <span>评分3.9&nbsp;&nbsp;月售6788</span>
                                <p>专人配送</p>
                                <div className="school">天津渤海职业技术学院</div>
                                <i></i>
                            </div>
                        </DianTopBox>
                  <DianSan>
                        <li>
                            <a>商品</a>
                        </li>
                        <li>
                            <a>评价</a>
                        </li>
                        <li>
                            <a>商家</a>
                        </li>
                  </DianSan>
                  <DianContent>
                        <ul className="content_left">
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>
                            <li>全部分类</li>

                        </ul>
                       {/* */} <div className="content_right">
                            <p>全部分类</p>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/bd643a15ccd0bc6f.jpeg!scfood_wap_food"/>
                                <span>
                                    <h2>霖竹卫生纸</h2>
                                    <i>销量：208</i>
                                    <b>
                                        <i>￥2.5/份</i>
                                        <div className="circle">+</div>
                                    </b>
                                </span>
                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/bd643a15ccd0bc6f.jpeg!scfood_wap_food"/>
                                <span>
                                    <h2>霖竹卫生纸</h2>
                                    <i>销量：208</i>
                                    <b>
                                        <i>￥2.5/份</i>
                                        <div className="circle">+</div>
                                    </b>
                                </span>
                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/bd643a15ccd0bc6f.jpeg!scfood_wap_food"/>
                                <span>
                                    <h2>霖竹卫生纸</h2>
                                    <i>销量：208</i>
                                    <b>
                                        <i>￥2.5/份</i>
                                        <div className="circle">+</div>
                                    </b>
                                </span>
                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/bd643a15ccd0bc6f.jpeg!scfood_wap_food"/>
                                <span>
                                    <h2>霖竹卫生纸</h2>
                                    <i>销量：208</i>
                                    <b>
                                        <i>￥2.5/份</i>
                                        <div className="circle">+</div>
                                    </b>
                                </span>
                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/bd643a15ccd0bc6f.jpeg!scfood_wap_food"/>
                                <span>
                                    <h2>霖竹卫生纸</h2>
                                    <i>销量：208</i>
                                    <b>
                                        <i>￥2.5/份</i>
                                        <div className="circle">+</div>
                                    </b>
                                </span>
                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/bd643a15ccd0bc6f.jpeg!scfood_wap_food"/>
                                <span>
                                    <h2>霖竹卫生纸</h2>
                                    <i>销量：208</i>
                                    <b>
                                        <i>￥2.5/份</i>
                                        <div className="circle">+</div>
                                    </b>
                                </span>
                            </li>
                            <li>
                                <img src="https://u2.0xiao.cn/3cfood_shop/license/image/bd643a15ccd0bc6f.jpeg!scfood_wap_food"/>
                                <span>
                                    <h2>霖竹卫生纸</h2>
                                    <i>销量：208</i>
                                    <b>
                                        <i>￥2.5/份</i>
                                        <div className="circle">+</div>
                                    </b>
                                </span>
                            </li>
                        </div> 
                  </DianContent>
                  <DianButton>
                        <div className="Button_left">
                            ￥15
                            <em>
                            <span >|</span>
                            <span className="car_sort_count">1</span>
                            样
                            <span className="car_all_count">1</span>
                            份
                            </em>
                        </div>
                        <div className="Button_right">
                                <i>清空</i>
                                <span>
                                    10￥起送
                                </span>
                        </div>
                  </DianButton>
                  </DianZong>
            </div>
        )
    }
    handleTo(){
        this.props.history.goBack();
        
    }
}



export default withRouter(Dian);