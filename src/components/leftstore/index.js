import React from "react";
import {  DianLeft } from "./styled";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import observer from "../../observer";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class LeftStore extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id:"",
            active:""
        }
        this.state.id=this.props.match.params.id;
    
    }
    render() {
        let {Sort}=this.props;
        let {active}=this.state;
        return (
            <div className="leftstore">
                <DianLeft>
             
                    {
                        Sort.map((item) => (
                            <li key={item.goods_sort_id} onClick={this.handleChange.bind(this,item.goods_sort_id)} className={active==item.goods_sort_id?"sss":""}> {item.goods_sort_name}</li>
                        ))
                    }
               
                </DianLeft>
            </div>
        )
    }
    componentDidMount(){
        this.props.handleAsycnDian(this.state.id);
     }
     handleChange(index){
        this.setState({
            active:index
        })
        observer.$emit("handleSend",index);
     }

}


export default LeftStore;

