import React, { Fragment } from "react";
import { HeaderConnect } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
import HistoryContent from "components/szd_message/history";
import SameCity from "components/szd_message/sameCity";
import World from "components/szd_message/world";
import School from "components/szd_message/benSchool";
@connect(mapStateToProps, mapDispatchToProps)
class Headline extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            front: [
                { text: "本校" },
                { text: "同城" },
                { text: "世界" },
                { text: "历史" },
            ]
        }
    }
    render() {
        let { front, activeIndex } = this.state
        return (
            <Fragment>
                <HeaderConnect>
                    <div className="head">
                        {
                            front.map((item, index) => (
                                <li key={index} onClick={this.handleShow.bind(this, index)} className={activeIndex == index ? 'active' : ''}>
                                    {item.text}
                                </li>
                            ))
                        }
                    </div>
                    <div className="school" style={{ display: activeIndex == 0 ? 'block' : 'none' }}>
                        <School />
                    </div>
                    <div className="school" style={{ display: activeIndex == 1 ? 'block' : 'none' }}>
                        <SameCity />
                    </div>
                    <div className="school" style={{ display: activeIndex == 2 ? 'block' : 'none' }}>
                        <World />
                    </div>
                    <div className="school" style={{ display: activeIndex == 3 ? 'block' : 'none' }}>
                        <HistoryContent />
                    </div>
                </HeaderConnect>
            </Fragment>
        )
    }
    
    handleShow(index) {
        switch (index) {
            case 0:
                //this.props.handleBenSchool(10,4)
                break;
            case 1:
                this.props.handleSchoolList(2)
                break;
            case 2:
                if(!localStorage.getItem("world")){
                    this.props.handleWorldList(3)
                }
                
                break;
            case 3:
                if(!localStorage.getItem("history")){
                    this.props.handleHistoryList(4)
                }
                break;
            }
        this.setState({
            activeIndex: index
        })
        
    }
}
export default Headline