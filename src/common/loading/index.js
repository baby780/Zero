import React from "react";
import {LoadingFigure} from "./styled"
export default class Loading extends React.Component {
    render() {
        return (
            <LoadingFigure>
                <div className="dot white"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </LoadingFigure>
        )
    }
}

