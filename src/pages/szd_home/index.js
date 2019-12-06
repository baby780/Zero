import React from "react";
import {HomeContent} from "./styled";
import Headers from "components/szd_header"
import ListContent from "components/szd_home";
import {} from "better-scroll"
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