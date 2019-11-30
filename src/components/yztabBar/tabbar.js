import React, { Component } from "react"
import { TabBarContainer } from "./yizhuan"
import { TabBar } from "router/yzrouter"
import { withRouter} from "react-router-dom";
 class TabBars extends Component {
    constructor() {
        super()
        this.state = {
            flag: 0
        }
    }
    render() {
        let {path} = this.props;
        return (
            <TabBarContainer>
                <ul>
                    {
                        TabBar.map((item) => (
                            <li key={item.path} onClick={this.handleTo.bind(this,item.path)} className={path===item.path?'active':""} >
                                <i className="iconfont" >{item.icon}</i>
                                <span>{item.text}</span>

                            </li>
                        ))
                    }
                </ul>

            </TabBarContainer>
        )
    }
    handleTo(path){
        this.props.history.push(path)
       
    }
}
export default withRouter(TabBars)