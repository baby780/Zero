import React from "react"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Yzlist } from "./yzstyled"
import observer from "@/observer"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ""
        }
        
    }
    render() {
        let { list } = this.props

       
        return (
            <Yzlist>

                <div className="header">
                    <div className="top">
                        <div className="left" onClick={this.handle.bind(this)}>
                            <i className="iconfont icon-zuo1"></i>
                        </div>
                        <div className="right">
                            <i className="iconfont icon-xingtaiduICON_sousuo---copy"></i>
                            <i className="iconfont icon-dianhua"></i>
                            <i className="iconfont icon-fenxiang1"></i>
                        </div>
                    </div>
                    <div className="tilte">{this.state.title}</div>

                </div>
                <div className="content">
                    {
                        list.map((item, index) => (
                           
                            <div key={index} className="cl" onClick={this.handlePush.bind(this,item)}>
                                <img src={"https://u2.0xiao.cn" + item.image} />
                                <p>{item.name}</p>
                                <p className="money">
                                    <span>￥{item.price}</span>
                                    <del>￥{item.old_price}</del>
                                </p>
                                <p className="mai">
                                    <span> 热销中 </span>
                                    <button>购买</button>
                                </p>
                            </div>
                        ))
                    }
                </div>



            </Yzlist>
        )
    }
    handle(){
        this.props.history.goBack()
    }
    componentDidMount() {
        console.log(this.props)
        let { id ,name} = this.props.match.params
        this.props.handliList(id)
        this.handleGetData(name);
    }
    handleGetData(name){
        // observer.$on("handle", (params) => {
            // console.log(params)
            this.setState({
                title: name
            })

        // })
    }
    handlePush(item){
        console.log(item)
        this.props.history.push({pathname:"/detail",query:{urls:item.image,title:item.name,price:item.price}})
    }

}
export default List