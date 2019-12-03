import React from "react";
import {FoodContent} from "./styled"
import FoodsContent from "components/szd_food/food"
import {withRouter} from "react-router-dom";
@withRouter
class Headline extends React.Component{
    render(){
        return(
            <FoodContent>
                <div className="header">
                    <span className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6d1;</span>
                    <span className="iconfont">&#xe603;</span>
                    <span className="iconfont">&#xe65c;</span>
                    <span className="iconfont" onClick={this.handleSearch.bind(this)}>&#xe606;</span>
                </div>
                <FoodsContent/>
            </FoodContent>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
    handleSearch(){
        this.props.history.push("/search")
    }
}
export default Headline