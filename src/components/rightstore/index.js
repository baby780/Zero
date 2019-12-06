import React from "react";
import { DianRight } from "./styled";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import observer from "../../observer";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class RightStore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            ss: [],

            goodList:[]

        }

        this.state.id = this.props.match.params.id
    }
    render() {
        let { Goods } = this.props;
        let { ss } = this.state;
        observer.$on("handleSend", (params) => {
            function commentsForPost(params, Goods) {
                return Goods.filter(function (comment) {
                    return comment.goods_sort_id == params
                })
            }
            /*  console.log(commentsForPost(params,Goods));  */
            this.setState({
                ss: commentsForPost(params, Goods)
            })
        })
        /* Goods=this.ss; */

        return (
            <div className="RightStore">
                <DianRight>
                    <p onClick={this.handleAll.bind(this)}>全部分类</p>
                    {
                        ss.map((item) => (
                            <li key={item.goods_id}>
                                <img src={'https://u2.0xiao.cn' + item.goods_path} />
                                <span>
                                    <h2>{item.goods_name}</h2>
                                    <i>销量：{item.sale_count}</i>
                                    <b>
                                        <i>￥{item.price}/份</i>
                                        <div className="circle" onClick={this.handleAdd.bind(this,{id:item.goods_id,name:item.goods_name,price:item.price,num:1} )}>+</div>
                                    </b>
                                </span>
                            </li>
                        ))
                    }

                </DianRight>
            </div>
        )
    }
    componentDidMount() {
        this.props.handleAsycnDian(this.state.id);
    }
    handleAll() {
        this.setState({
            ss: this.props.Goods
        })
    }
    handleAdd(params) {
    //   this.Cart.plus(_indentify,_counter,_config);
    //   console.log(this.plus(_indentify,_counter,_config));
        /* this.Cart(_id,_name._price,1); */
        var flag=0;
        var index="";
        for(var i=0;i<this.state.goodList.length;i++){
            if(params.id==this.state.goodList[i].id){
                flag=1;
                index=i;
                break;
            }
        }
        if(flag==0){
            this.state.goodList.push(params);
        }else{
            this.state.goodList[index].num++
        }
        
        localStorage.setItem("food",JSON.stringify(this.state.goodList))
    }
}


export default RightStore;

