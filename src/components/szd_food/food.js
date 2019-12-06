import React from "react"
import { FoodConiter } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class FoodsContent extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [
                { text: "商品" },
                { text: "评价" },
                { text: "商家" },
            ],
            num:0
        }
    }
    render() {
        let { goods, sort } = this.props.detailList
        let { list,num } = this.state
        return (
            <FoodConiter>
                <div className="table_tag">
                    {
                        list.map((item, index) => (
                            <span key={index}>{item.text}</span>
                        ))
                    }
                </div>
                <div className="content_box">

                    <ul className="list">
                        <li className={num==0?'active':''} onClick={this.handleClassify.bind(this)}>全部分类</li>
                        {
                            typeof (sort) == "object" ? sort.map((item, index) => (
                                <li key={index}>{item.goods_sort_name}</li>
                            )) : ""
                        }
                    </ul>
                    <div className="content">
                        <p className="all">全部分类</p>
                        <ul className="food_ul">
                            {
                                goods ? goods.map((text, index) => (
                                    <li key={index}>
                                        <img src={"https://u2.0xiao.cn"+text.goods_path} />
                                        <div className="weight">
                                            <h3>{text.goods_name}</h3>
                                            <p className="mb">{text.goods_notice}</p>
                                            <p className="xiao">销量：{text.sale_count}</p>
                                            <p className="mt5"><i>￥{text.price}</i><em>/{text.goods_unit}</em>
                                            <span>+</span>
                                            </p>
                                            
                                        </div>
                                    </li>
                                )):''
                            }

                        </ul>
                    </div>
                </div>
                <div className="shopCar">
                    
                </div>
            </FoodConiter>
        )
    }
    componentDidMount() {
        let id = this.props.match.params.id
        this.props.handleDetailList(id)
    }
    handleClassify(){
        
    }
}
export default FoodsContent