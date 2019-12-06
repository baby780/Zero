import React, { Fragment } from "react";
import { SearchContent, SearchPrudect } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            inputVal: "",
            show: false
        }
    }
    render() {
        let { searchList } = this.props
        let { show } = this.state
        return (
            <Fragment>
                <SearchContent>
                    <div className="site_search">
                        <span className="iconfont back" onClick={this.hadnleBack.bind(this)}>&#xe6d1;</span>
                        <input type="text" placeholder="按店名关键词搜索" onChange={this.handleSearch.bind(this)} />
                        <button onClick={this.handleBtn.bind(this)}>搜索</button>
                    </div>
                    <div className="hotSearch">
                        <p>热门搜索</p>
                        <div className="classify">
                            <span>123465</span>
                            <span>123465</span>
                        </div>
                    </div>
                </SearchContent>
                <SearchPrudect style={{ display: show ? 'block' : 'none' }}>
                    <ul>
                        {
                            searchList.map((item, index) => (
                                <li key={index}>
                                    <a href="#">
                                        <img src={"https://u2.0xiao.cn" + item.info.pic_path} />
                                        <h2>{item.info.shop_name}</h2>
                                        <div className="clo1">
                                            <div>
                                                <i></i>
                                                <span>{item.info.star}</span>
                                            </div>

                                            月售：
                                    <span>{item.info.month_total}单</span>
                                        </div>
                                        <p className="ove clo2">
                                            起价：
                                    <span>￥{item.info.min_price}</span>
                                            配送：
                                    <span>￥0</span>
                                        </p>
                                        <p className="ove clo3">
                                            <i></i>
                                            {item.info.description}
                                        </p>
                                        <p className="ove address">
                                            <i></i>
                                            {item.info.address}
                                        </p>
                                        <span className="iconfont open" style={{ display: 'none' }}>&#xe63c;</span>
                                        <span className="close">暂停中</span>
                                        <span className="school">校园专送</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </SearchPrudect>
            </Fragment>
        )
    }
    handleSearch(e) {
        let val = e.target.value;
        if (val === "") {
            this.setState({
                show: false
            })
        } else {
            this.setState({
                inputVal: val
            })
        }

    }
    hadnleBack() {
        this.props.history.goBack();
    }
    handleBtn() {
        if (this.state.inputVal === "") {
            alert("请输入搜索内容")
        } else {
            this.setState({
                show: true
            })
            this.props.handleSearchList(this.state.inputVal)
        }

    }
}
export default Search