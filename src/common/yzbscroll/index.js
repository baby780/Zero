import React,{Component}from "react"
import {Bswrapper} from "./styled"
import Bscroll from "better-scroll"

class Betterscroll extends Component{
    render(){
        return(
            <Bswrapper ref="wrapper">
                {
                    this.props.children

                }
            </Bswrapper>
        )
    }
    componentDidMount(){
        this.scroll=new Bscroll(this.refs.wrapper)
    }
}
export default Betterscroll