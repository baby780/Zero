import React from "react"
import { Yzsearch } from "./yastyled"
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {mapDispatchToProps,mapStateToProps} from "./mapStore"
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class search extends React.Component {
    state = {
        value: '',
    };
    onChange= (value) => {
        this.setState({ value });
        
        this.props.handleSubmit(this.state.value)
      };
    render() {
        let {goods}=this.props
        console.log(goods)
        return (
            <Yzsearch>
                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    // onFocus={() => console.log('onFocus')}
                    // onBlur={() => console.log('onBlur')}
                    // onCancel={() => console.log('onCancel')}
                    showCancelButton
                    onChange={this.onChange}
                />
                {
                    goods.map((item,index) => (
                      
                        <div className="content" key={index} >
                            <span>
                            <img src={item.info.pic_path} />
                                <p>
                                    <span className="span1">{item.info.shop_name}</span>
                                    <span>月售：{item.info.month_total}单</span>
                                    <span>起价：￥{item.info.min_price} 配送：￥{item.info.extra_fee}</span>
                                    <span className="iconfont icon-dian-copy">{item.info.keywords}</span>
                                    <span className="iconfont icon-location">{item.info.address}</span>
                                </p>
                                <div>
                                    <span className="iconfont icon-yingyezhongyingyeshijianicon"></span>
                                    <p>校园专送</p>
                                </div>
                            </span>
                        </div>
                    ))
                }
            </Yzsearch>
        )
    }
    // componentDidMount() {
        
    //     console.log(this.state.value)
    // }
    
}
export default search;