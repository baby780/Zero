import { Yztou } from "./styled"
import React from "react"
import {withRouter} from "react-router-dom"
@withRouter
class toutiao extends React.Component {

    render() {
        let conts = JSON.parse(localStorage.getItem("cont"))
        console.log(conts.url)
        return (
            <Yztou>
                <div className="header">
                    <span className="iconfont icon-zuo1" onClick={this.handle.bind(this)}></span>
                    <p>我贡献的校园微头条</p>
                    <span className="iconfont icon-jia"></span>

                </div>
                <div className="content">
                    {
                        conts.map((item,index)=>(
                            <div key={index}>
                            <span>
                                <img src={item.url} alt=""/>
                                <p>
                                    <b>本校:{item.value}</b>
                                    <strong>{item.data}</strong>
                                </p>
                                <span>完成</span>
                            </span>
                        </div>
                        ))
                    }
                </div>
            </Yztou>
        )
    }
    handle() {
        this.props.history.goBack()
    }
}
export default toutiao