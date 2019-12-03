import React from "react";
import {CommentCity} from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
@connect(mapStateToProps, mapDispatchToProps)
class SameCity extends React.Component{
    render(){
        return(
        <CommentCity>
            <div>
               <img src="https://static.0xiao.com/Public/release/img/order-171bb81db8.png" />
                <p>还没头条~首发？</p> 
            </div>
        </CommentCity>
        )
    }
    // componentDidMount(){
    //     this.props.handleSchoolList(2)
    // }
}
export default SameCity