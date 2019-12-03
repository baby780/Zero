import React, { Component,Fragment} from 'react'
import TabBar from "common/tabBar/Bohai.js"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
                {/* 内容区 */}
                <TabBar path={this.props.path}/>
            </Fragment>
        )
    }
}