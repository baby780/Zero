import React from "react";
import { InfoContainer } from "./styled.js"
import { Upload, Icon, Radio} from 'antd';
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)



class UpdateInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            imageUrl: '',
            name:"",
            value: "男",
            sex:false,
            oldPass:"",
            newPass:"",
            upPass:false
        }
        
    }
    render() {
        this.data=localStorage.getItem("userinfo")?JSON.parse(localStorage.getItem("userinfo")):'';
        this.updata = localStorage.getItem("upInfo")?JSON.parse(localStorage.getItem("upInfo")):localStorage.getItem("userinfo");
        this.data.name=this.updata.name?this.updata.name:this.data.name;
        this.data.unrlPic= this.updata.photo?this.updata.photo:this.data.unrlPic;
        let {sex,value,upPass,name,oldPass,newPass} = this.state; 
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <InfoContainer>
                <div className="header">
                    <span className="iconfont">&#xe6d1;</span>
                    <h2>会员资料</h2>
                    <span onClick={this.handleComplete.bind(this)}>完成</span>
                </div>
                <ul>
                    <li>
                        <span>头像</span>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            onChange={this.handleChange}
                            method='post'
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> : uploadButton}
                        </Upload>
                    </li>
                    <li>
                        <span>昵称</span>
                        <input type="text"  value={name} className="name" onChange={this.handleInfoName.bind(this)} />
                    </li>
                    <li>
                        <span>实名</span>
                        <p className="name">不知道</p>
                    </li>
                    <li onClick={this.handleUpSex.bind(this)}>
                        <span>性别</span>
                        <p className="name">{value}</p>
                    </li>
                    <li onClick={this.handleUpPass.bind(this)}>
                        <span>密码</span>
                        <p>修改密码</p>
                    </li>
                </ul>
                {/* 修改性别 */}
                <div className="sex_box" style={{display:sex?'block':'none'}}>
                    <div className="sex" onClick={this.handleSexs.bind(this)}></div>
                    <div className="select">
                        <h3>性别选择</h3>
                        <div>
                        <Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>
                            <Radio value={"男"}>男</Radio>
                            <Radio value={"女"}>女</Radio>
                        </Radio.Group>
                        </div>
                        <span className="preser" onClick={this.handleSex.bind(this)}>保存</span>
                    </div>
                </div>
                {/* 修改密码 */}
                <div className="password" style={{display:upPass?'block':'none'}}>
                    <div className="backdrop" onClick={this.handlePassColse.bind(this)}>

                    </div>
                    <form className="update">
                        <label>原始密码:</label>
                        <input type="password" value={oldPass} onChange={this.handleOldPass.bind(this)}/>
                        <label>新的密码:</label>
                        <input type="password" value={newPass} onChange={this.handleNewPass.bind(this)}/>
                        <button type="button" onClick={this.handleSure.bind(this)}>修改</button>
                    </form>
                    <span className="close" onClick={this.handleClose.bind(this)}>×</span>
                </div>
            </InfoContainer>
        )
    }
    handleClose(){
        this.setState({
            upPass:false
        })
    }
    handlePassColse(){
        this.setState({
            upPass:false
        })
    }
    componentWillMount() {
        this.firstTime = 0;
    }
    componentDidMount() {
        this.setState({
            imageUrl: this.data.unrlPic,
            name:this.data.name
        })
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.props.handlegetBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
                this.props.handleUpdatePhoto(this.state.imageUrl, this.data.id)
            );
        }
    };
    handleInfoName(e) {
        let val = e.target.value
        this.setState({
            name:val
        })
    }
    onChange (e) {
        this.setState({
            value: e.target.value,
        });
    }
    handleUpSex(){
        this.setState({
            sex:true
        })
    }
    handleSex(){
        this.setState({
            sex:false
        })
    }
    handleSexs(){
        this.setState({
            sex:false
        })
    }
    handleOldPass(e){
        let val = e.target.value;
        this.setState({
            oldPass:val
        })
    }
    handleNewPass(e){
        let val = e.target.value;
        this.setState({
            newPass:val
        })
    }
    handleUpPass(){
        this.setState({
            upPass:true
        })
    }
    async handleSure(){
        let data = localStorage.getItem("userinfo");
        let code = await this.props.UpdatePasswordAction(this.state.newPass,data.id)
        if(code==1){
            alert("修改成功")
            this.setState({
                upPass:false,
                oldPass:'',
                newPass:''
            })
        }
    }
    handleComplete(){
        this.props.UpdateInfoAction(this.state.name, this.data.id)
        let updateinfo = {
            name:this.state.name,
            photo:this.state.imageUrl
        }
        localStorage.setItem("upInfo",JSON.stringify(updateinfo))
        this.props.history.goBack();
    }
}


export default UpdateInfo