import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Yzhead } from "./yzstyled"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class headlines extends Component {
    render() {
        let { arr } = this.props
        console.log(arr[0])

        return (

            <Yzhead>

                {
                    arr.map((item, index) => (
                        <div className="content" key={index}>
                            <div className="title">{item.title}</div>
                            <div className="con">

                                <div>
                                    <p className="p">{item[0].range}</p>
                                    <p>
                                        <em>
                                            <img src={item[0].inset} />
                                            <b>{item[0].content}</b>
                                        </em>
                                    </p>

                                </div>
                                {item[1] ?
                                    <div>
                                        <p className="p">{item[1].state}</p>
                                        <p>
                                            <em>
                                                <img src={item[1].inset} />
                                                <b>{item[1].content}</b>
                                            </em>
                                        </p>
                                    </div> : ''}
                            </div>
                        </div>
                    ))
                }

            </Yzhead>
        )
    }
    //  {/* {
    //                  head.data.list?
    //                head.data.list.map((item,index)=>(
    //                    <div>{item.data_week}</div>
    //                )):''
    //             }  */}
    //     {Object.keys(this.props.appearanceNode).map(key => (
    //         <Form.Item {...formItemLayout} key={key}>
    //           <div key={key}>{this.props.appearanceNode[key]}        
    //                 </div>
    //         </Form.Item>
    //       ))}    
    // this.props.appearanceNode 为一个对象， key 为循环的对象的每一项key 值 ，
    // {this.props.appearanceNode[key]}为key值对应的value 值
    componentDidMount() {
        this.props.handleHead()
    }
}
export default headlines 