import React, { Component } from "react"
import { Yzpaid } from "./yzstyled"
import { withRouter } from "react-router-dom"
import { List, Radio, Flex, WhiteSpace, ImagePicker, WingBlank, Button, InputItem, Toast } from 'antd-mobile';

const data = [{

    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',

}];
const RadioItem = Radio.RadioItem;
@withRouter
class paid extends Component {
    states = {
        value: 0,
        value2: 0,
        value3: 0,
        value4: 0,

    };
    onChange2 = (value) => {
        console.log(value);
        this.setState({
            value2: value,
        });
    };
    state = {
        files: data,
        multiple: false,
        length: 1,
        hasError: false,
        value: '',

    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 6 digits');
        }
    }
    onChanges = (value) => {
        if (value.replace(/\s/g, '').length < 6) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value,
        });
    }
    render() {
        const { value2 } = this.states;
        const { files, value } = this.state;
        const data2 = [
            { value: 0, label: '本校' },

        ];

        return (
            <Yzpaid>
                <div className="header">
                    <span className="iconfont icon-zuo1" onClick={this.handle.bind(this)}></span>
                    <p>贡献微头条·得奖励金</p>
                    <span className="iconfont icon-wenben" onClick={this.handleTt.bind(this)}></span>
                </div>
                <div className="radio">
                    <List>
                        {data2.map(i => (
                            <RadioItem key={i.value} checked={value2 === i.value} onChange={() => this.onChange2(i.value)}>
                                {i.label}<List.Item.Brief>{i.extra}</List.Item.Brief>
                            </RadioItem>
                        ))}
                    </List>


                </div>
                <div className="con">
                    
                    {/* <p>头条:</p> */}
                   
                    <List >
                        <InputItem
                            type="text"
                            placeholder=""
                            error={this.state.hasError}
                            onErrorClick={this.onErrorClick}
                            onChange={this.onChanges}
                            value={this.state.value}
                        >头条</InputItem>
                    </List>
                </div>
                <div className="con1">
                    <input type="url" name="news_link" maxLength="128" placeholder="http(s)://" />
                </div>
                <div className="img">
                    <WingBlank>

                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 1}
                            multiple={this.state.multiple}
                            length={this.state.length}

                        />
                    </WingBlank>
                </div>
                <Button type="warning" onClick={() => this.handltSubmit()}>提交申请</Button>
            </Yzpaid>
        )
    }
    handleTt(){
        this.props.history.push("/toutiao")
    }
    handle() {
        this.props.history.goBack()
    }
    handltSubmit() {
        console.log(this.state.files[0].url,this.state.value)
        let url=this.state.files[0].url;
        let value=this.state.value;
        let flag=true;
        let data=new Date();
        console.log(data)
        let info={
            url,
            value,
            flag,data
        }
        var fign=true
        let cont=localStorage.getItem("cont")?JSON.parse(localStorage.getItem("cont")):[]
        // this.state.files
            cont.push(info)
            localStorage.setItem("cont",JSON.stringify(cont))
        
    }
   
}

export default paid