import React from "react";
import {HomeContent} from "./styled";
import Headers from "components/szd_header"
import ListContent from "components/szd_home"
export default class Home extends React.Component{
    render(){
        return(
            <HomeContent>
                <Headers/>
                <ListContent/>
            </HomeContent>
        )
    }
}