import React from "react";
import {HeaderContainer} from "./styled";
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
class Headers extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <div className="left">
                    <a href="#" className="a1">
                        <span className="iconfont icon-location"></span>{this.props.title}
                    </a>
                </div>
                <div className="right">
                    <Link to="/search" className="search">
                        <i className="iconfont">&#xe606;</i>
                        <span to='/search'>{this.props.search}</span>
                    </Link>
                    <a href="#">
                        <img src="https://static.0xiao.com/Public/release/img/home/site_ring-3d26425f8f.png" />
                    </a>
                </div>

            </HeaderContainer>
        )
    }
}
Headers.defaultProps={
    title:"天津轻工职业技术学院",
    search:"搜索"
}
Headers.propTypes={
    title:PropTypes.string
}
export default Headers
