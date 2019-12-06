import React from "react";
import { CanteenDetails } from "./styled";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class CanteenContent extends React.Component {
    render() {
        let { canTeenList } = this.props
        return (
            <CanteenDetails>
                <ul>
                    {
                        canTeenList?canTeenList.map((text, index) => (
                            <li key={index} onClick={this.handleFood.bind(this,text)}>
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
                                        
                                    </p>
                                    <p className="ove address">
                                        <i></i>
                                        {text.info.address}
                                    </p>
                                    <span className="iconfont open" style={{ display: text.info.shop_state == 1 ? 'block' : 'none' }}>&#xe63c;</span>
                                    <span className="close" style={{ display: text.info.shop_state == 3 ? 'block' : 'none' }}>暂停中</span>
                                    <span className="school">校园专送</span>
                                </div>
                            </li>
                        )):''
                    }
                </ul>
            </CanteenDetails>
        )
    }
    componentDidMount() {
        this.props.handleCanteenList(this.props.match.params.id);
    }
    handleFood(text){
        this.props.history.push("/food/"+text.shop_id)
    }
}
export default CanteenContent