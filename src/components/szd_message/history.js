import React from "react";
import { Historycenter } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
@connect(mapStateToProps, mapDispatchToProps)
class HistoryContent extends React.Component {
    constructor(){
        super()
        this.state={
            yue:"",
            date:""
        }
    }
    render() {
        let {historyList} = this.props
        let {yue,date,year} = this.state
        return (
            <Historycenter>
                <h2 className="tody">
                    <span>{yue}月{date}日</span>历史上的今天
                    <i className="iconfont">&#xe6a1;</i>
                </h2>
                <ol className="content">
                    {
                        historyList.map((item, index) => (
                            <li key={index}>
                                <img src={item.pic} style={{display:item.pic===""?'none':'block'}} />
                                <p className="p1">{item.title}</p>
                                <p className="p2"><span>{item.year}年</span>{item.lunar}</p>
                                <p className="p3">{item.ago}年前</p>
                            </li>
                        ))
                    }
                </ol>
            </Historycenter>
        )
    }
    componentDidMount() {
        this.props.handleHistoryList(4)
        let nowTime = new Date()
        var yue = nowTime.getMonth()+1;//获取当前月
        var date = nowTime.getDate();//获取当前日
        if(date<10){
            date="0"+date
        }
        this.setState({
            yue:yue,
            date:date
        })
    }
}
export default HistoryContent