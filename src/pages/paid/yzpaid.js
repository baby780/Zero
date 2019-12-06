import React, { Component } from "react"
import { Yzpaid } from "./yzstyled"
import {withRouter} from "react-router-dom"
@withRouter
 class paid extends Component {
    render() {
        return (
            <Yzpaid>
                <div className="header">
                    <span className="iconfont icon-zuo1" onClick={this.handle.bind(this)}></span>
                    <p>贡献微头条·得奖励金</p>
                    <span className="iconfont icon-wenben"></span>
                </div>
                
            </Yzpaid>
        )
    }
    handle(){
        this.props.history.goBack()
    }
}
export default paid