import React from "react";
import {FourContent} from "./styled";
import { connect } from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import CanteenContent from "components/szd_canteen";
import {withRouter} from "react-router-dom";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class FourFood extends React.Component{
    render(){
        return(
            <FourContent>
                <div className="header">
                    <span className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6d1;</span>
                    <h2>{this.props.match.params.name}</h2>                    
                    <span>♂</span>                    
                </div>
                <div className="img1">
                    <img src="https://u2.0xiao.cn/0xiao/masterad/image/20190906/5d714a9159788.png"/>
                </div>
                <CanteenContent>
                </CanteenContent>
            </FourContent>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
}
export default FourFood