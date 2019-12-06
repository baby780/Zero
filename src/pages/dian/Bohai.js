import React from "react";
import { DianZong, DianHeader, DianTop, DianTopBox, DianSan, DianContent, DianButton } from "./styled";
import { withRouter } from 'react-router-dom'
import LeftStore from "components/leftstore";
import RightStore from "components/rightstore";
import ButtonStore from "components/buttonstore"

@withRouter

class Dian extends React.Component {
  constructor(props){
    super(props)
    this.state={
      ss:{}
    }
    this.state.ss=this.props.location.query;
    localStorage.setItem("dian",JSON.stringify(this.props.location.query))
  }
  render() {
    let sss=JSON.parse(localStorage.getItem("dian"))
    console.log(sss);
    return (
      <div className="Dian">
        {/* */}<DianZong>
          <DianHeader>
            <div className="left">
              <i onClick={this.handleTo.bind(this)} className="iconfont icon-zuo1"></i>
            </div>
            <div className="right">
              <i className="iconfont icon-xingtaiduICON_sousuo---copy"></i>
              <i className="iconfont icon-dianhua"></i>
              <i className="iconfont icon-fenxiang1"></i>
            </div>
          </DianHeader>
          <DianTop urls={sss.img}></DianTop>
          <DianTopBox>
            <div className="shop_info">
              <img src={"https://u2.0xiao.cn/"+sss.img} />
              <h2>{sss.name}</h2>
              <span>评分{sss.star}&nbsp;&nbsp;月售{sss.total}</span>
              <p>专人配送</p>
              <div className="school">{sss.address}</div>
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
            <LeftStore />
            <RightStore />
          </DianContent>

          <DianButton>
              <ButtonStore/>
          </DianButton>
        </DianZong> 
      </div>
    )
  }
  handleTo() {
    this.props.history.goBack();
  }
 

}



export default Dian;

/*
const data = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: '1',
        disabled: false,
      },
      {
        label: 'Chinese Food',
        value: '2',
      }, {
        label: 'Hot Pot',
        value: '3',
      }, {
        label: 'Buffet',
        value: '4',
      }, {
        label: 'Fast Food',
        value: '5',
      }, {
        label: 'Snack',
        value: '6',
      }, {
        label: 'Bread',
        value: '7',
      }, {
        label: 'Fruit',
        value: '8',
      }, {
        label: 'Noodle',
        value: '9',
      }, {
        label: 'Leisure Food',
        value: '10',
      }],
  },
]


*/