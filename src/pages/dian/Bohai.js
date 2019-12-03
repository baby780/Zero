import React from "react";
import {DianZong,DianHeader,DianTop,DianTopBox,DianSan,DianContent,DianButton} from "./styled";
import { withRouter } from 'react-router-dom'
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class Dian extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:""
        }
        this.state.id=this.props.match.params.id
    
    }
    render(){
        let {Sort,Goods,Like}=this.props;
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
  <DianTop></DianTop>
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
            {
                Sort.map((item)=>(
                    <li key={item.goods_sort_id}> {item.goods_sort_name}</li>
                ))
            }
         
           

        </ul>
       <div className="content_right">
            <p>全部分类</p>
            {
              Goods.map((item)=>(
                    <li key={item.goods_id}>
                        <img src={'https://u2.0xiao.cn'+item.goods_path}/>
                        {/* {'https://u2.0xiao.cn'+item.info.pic_path}*/}
                        <span>
                            <h2>{item.goods_name}</h2>
                            <i>销量：{item.sale_count}</i>
                            <b>
                                <i>￥{item.price}/份</i>
                                <div className="circle">+</div>
                            </b>
                        </span>
                    </li>
                ))
            }  
       
           
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
    componentDidMount(){
       this.props.handleAsycnDian(this.state.id);
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