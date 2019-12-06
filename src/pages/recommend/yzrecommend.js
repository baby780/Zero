import React from "react";
import { Yzreco } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import observer from "@/observer"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class reco extends React.Component {
    render() {
        let { reco } = this.props
        console.log(reco)
        return (
            <Yzreco>
                {
                    reco.map((item, index) => (
                        <div key={index} className="content" onClick={this.handleClick.bind(this,item)} >
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

            </Yzreco>
        )
    }
    componentDidMount() {
        this.props.handleEeco()
    }
    handleClick(item){
        this.props.history.push("/list/"+(item.shop_id))
        observer.$emit("handle",item.info.shop_name)
    }
}
export default reco