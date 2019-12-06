import React,{Component} from "react"
import url from "url";
import {withRouter} from "react-router-dom"
import {Yzdetail} from "./yzstyled"
@withRouter
 class detail extends Component{
    constructor(props){
        super(props)
        this.state={
            urls:"",
            name:"",
            price:""
            
        }
        // console.log(props.location.query)
        //et { urls} =  url.parse(this.props.location.search,true).query
        this.state.urls=this.props.location.query.urls;
        this.state.name=this.props.location.query.title;
        this.state.price=this.props.location.query.price;

        // console.log(this.state.url)
    }
    render() {
        return(
            <Yzdetail>
                <div className="header">
                    <span className="iconfont icon-zuo1" onClick={this.handleBack.bind(this)}></span>
                    <p>{this.state.name}</p>
                    <span className="iconfont icon-xin"></span>
                </div>
                <div className="content">
                    <p>{this.state.name}·商品详情</p>
                    <img src={"https://u2.0xiao.cn" + this.state.urls} />
                    <div>
                        <p>￥{this.state.price}</p>
                        <button>加入购物车</button>
                    </div>
                </div>
            </Yzdetail>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
    componentDidMount(){
    
        // console.log(url,price,title)
    }
}
export default detail