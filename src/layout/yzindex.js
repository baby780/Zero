import React, { Component,Fragment} from 'react'
import TabBars from "components/yztabBar/tabbar"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
                <TabBars path={this.props.path}/>
            </Fragment>
        )
    }
}