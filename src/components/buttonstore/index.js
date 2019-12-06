 import React from "react";
import { DianButtonLeft, DianButtonRight} from "./styled";
import { withRouter } from 'react-router-dom'
@withRouter
class ButtonStore extends React.Component {
constructor(){
    super()
    this.state={
        
    }
}
    render() {
        let foods=JSON.parse(localStorage.getItem("food"))
        return (
            <div className="buttonstore" style={{  width:"100%",
            display:"flex",
            }}>

            <DianButtonLeft>
               
                 {/*    Object.keys(obj).map(key => console.log(obj[key])); */}
                    <em>
                        <span >|</span>
                        <span className="car_sort_count">
                           
                        </span>
                        样
            <span className="car_all_count">1</span>
                        份
            </em>
            </DianButtonLeft>
                <DianButtonRight>
                <i onClick={this.handleremove.bind(this)}>清空</i>
                    <span onClick={this.handlego.bind(this)}>
                        去结算
                    </span>
                </DianButtonRight>

            </div>
        )
    }
    handleremove() {
        localStorage.removeItem("food")
      }
      handlego(){
        this.props.history.push("/ding")
      }
}

export default ButtonStore;