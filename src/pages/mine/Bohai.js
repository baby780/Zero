import React from "react";
import {Minecontent,MineTop,MineNav,Minelinks_list,Minelinks_list2,Minelinks_list3,MineBottom} from "./styled";
class Mine extends React.Component{
    render(){
        return( 
            <div className="Mine">
                <Minecontent>
                <MineTop>
                    <div className="user_head ">
                        <img src="https://u2.0xiao.cn/0xiao/user/head_img/image/3c2192cf3d79c78c.jpeg"/>
                        <em>♀</em>
                    </div>
                    <div className="ovh">
                        <p>
                            <span>笨@</span>
                            <img className="user_grade_sign" src="https://static.0xiao.com/Public/release/img/user/grade_sign_1-00edb0e425.png" />
                        </p>
                        <p>
                            <em>
                                177******68
                            </em>
                        </p>
                    </div>
                </MineTop>
                <MineNav>
                    <li>
                        <img src="https://static.0xiao.com/Public/release/img/user/user_my_favor-990fc9102e.png"/>
                        <p>我的收藏</p>
                    </li>
                    <li>
                        <img src="https://static.0xiao.com/Public/release/img/user/user_my_team-52aec75c7d.png"/>
                        <p>我的团队 </p>
                    </li>
                    <li>
                        <img src="https://static.0xiao.com/Public/release/img/user/user_my_order-9e16cdeaf5.png"/>
                        <p>我的订单</p>
                    </li>
                    <li>
                        <img src="https://static.0xiao.com/Public/release/img/user/user_my_balance-0b13cb4d4e.png"/>
                        <p>我的余额</p>
                    </li>
                </MineNav>
                <Minelinks_list>
                    <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_myexpress-36c9b77db3.png"/>
                            我的快递
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                    <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_myprint-78f34b4555.png"/>
                            我的打印
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                    <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_mycoupon-96d4050772.png"/>
                            我的票劵
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                    <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_myscore-a66a7c2ce6.png"/>
                            我的原力
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                    <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_debate-8da925ea9b.png"/>
                            校辩领域
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                </Minelinks_list>
                <Minelinks_list2>
                <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_address-85e91ebce0.png"/>
                            备用地址
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                    <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_configure-1b82f020c0.png"/>
                            我的配置
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                </Minelinks_list2>
                <Minelinks_list3>
                <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/service_list-495bcd4378.png"/>
                            帮助反馈
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                    <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_safe-457251ce89.png"/>
                            安全设置
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                    <li >
                        <div className="li_left">
                            <img src="https://static.0xiao.com/Public/release/img/user/user_ware-92f95c7bf9.png"/>
                            免费开店
                        </div>
                        <div className="iconfont icon-zuo"></div>
                    </li>
                </Minelinks_list3>
                <MineBottom>
                    <img src="https://static.0xiao.com/Public/release/img/user/logo_160-b3c648f839.png"/>
                    <p>聚合多样服务  打造智慧校园</p>
                </MineBottom>
                </Minecontent>
            </div>
        )
    }
}

export default Mine;