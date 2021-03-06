import React from "react";
import {Yzcomp} from "./styled"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import observer from "@/observer"
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class comprehensive extends React.Component{
    render(){
        let {comp}=this.props
        console.log(comp)
        return(
            <Yzcomp>
                {
                    comp.map((item,index) => (
                        <div className="content" key={index} onClick={this.handleClick.bind(this,item)} >
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

            </Yzcomp>
        )
    }   
    componentDidMount(){
        this.props.handlecomp()
    } 
    handleClick(item){
        this.props.history.push("/list/"+(item.shop_id))
        observer.$emit("handle",item.info.shop_name)
    }
}
export default comprehensive