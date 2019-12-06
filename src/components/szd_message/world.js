import React from "react";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
import { Accordion, List } from 'antd-mobile';
import {withRouter} from "react-router-dom";
import Betterscroll from "common/yzbscroll";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class World extends React.Component {
    render() {
        let { worldList } = this.props;
        return (
            <Betterscroll>
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    {
                        worldList?worldList.map((item, index) => (
                            <Accordion.Panel header={item.data_week} key={index}>
                                <List className="my-list">
                                    {
                                        worldList[index].list?worldList[index].list.map((text,ind)=>(
                                            <List.Item key={ind} onClick={this.handleDetails.bind(this,text)}>{text.content}</List.Item>
                                        )):''
                                    }
                                </List>
                            </Accordion.Panel>
                        )):''
                    }
                </Accordion>
            </div>
            </Betterscroll>
        )
    }
    handleDetails(text){
        window.location.href=text.link;
    }
}
export default World