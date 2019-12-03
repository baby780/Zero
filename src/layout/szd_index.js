import React, { Component,Fragment} from 'react'
import Footer from "components/footer/footer"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
                {/* 内容区 */}
                <Footer path={this.props.path}/>
            </Fragment>
        )
    }
}
/*
    组件标签内部嵌套的内容使用
    this.props.children
*/