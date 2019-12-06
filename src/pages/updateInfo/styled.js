import styled from "styled-components";
export const InfoContainer=styled.div`
width:100%;height:100%;background:#f5f5f5;
.header{
    width:100%;height:0.4rem;background:#fff;display:flex;
    justify-content:space-between;align-items:center;
    span{
        display:flex;justify-content:center;align-items:center;
        width:0.52rem;height:100%;font-size:24px;
    }
    span:nth-of-type(2){
        font-size:16px;color:#ff6d0c;font-weight:bolder;
    }
    h2{
        flex:1;text-align:center;line-height:0.4rem;height:100%;
        font-size:18px;font-weight:bolder;
    }
}
ul{
    width:100%;background:#fff;
    padding:0 16px 10px 16px;margin-top:10px;
    li{
    display: flex;
    justify-content: space-between;
    padding: 3px 0;
    border-top: 1px solid #eee;
    font-size: 16px;
    color: #888;
    line-height: 50px;
    align-items: center;
    span{
        font-size:16px;color:#333;
    }
    .name{
        width:88%;text-align:right;font-size:16px;color:#888;border:0;outline:none;
    }
    }
    .ant-upload-select-picture-card{
        width:0.4rem;height:0.4rem;border-radius:50%;outline:none
    }
    .ant-upload-text{
        display:none;
    }
}
.sex_box{
    width:100%;height:100%;position:absolute;top:0;
}
.sex{
    width:100%;height:100%;background:#000;opacity:0.6;position:absolute;top:0;z-index:20;
}
.select{
        width:100%;height:2.94rem;background:#fff;position:absolute;top:0;z-index:30;padding:15px;
        h3{
            font-size:16px;text-align:center;margin:7px 0 50px 0;
        }
        div{
            width:100%;height:0.73rem;
            font-size:16px;color:#333;display:flex;
            justify-content:space-between;
        }
        .preser{
            display:block;width:90%;height:0.44rem;background:#ff6600;border-radius:22px;font-size:16px;
            color:#fff;text-align:center;line-height:0.44rem;margin:0 auto;
        }
}
.password{
    width:100%;height:100%;position:absolute;top:0;
    .backdrop{
        width:100%;height:100%;background:#000;opacity:0.7;position:absolute;top:0;
        z-index:20;
    }
    .update{
        width:100%;height:2.94rem;position:absolute;top:0;background:#fff;z-index:30;
        font-size:16px;display:flex;flex-direction:column;padding:10px 10px;
        label{
            margin-bottom:10px;
        }
        input{
            margin:10px 0;width:100%;height:0.4rem;border-radius:10px;outline:none;
            border:1px solid #ddd;padding-left:10px;
        }
        button{
            width:100%;height:0.45rem;text-align:center;line-height:0.45rem;
            font-size:16px;color:#fff;background:#ff6600;border:1px solid #ddd;border-radius:22px;
            margin-top:20px;
        }
    }
    .close{
        position:absolute;top:5px;right:15px;
        width:0.2rem;height:0.2rem;border-radius:50%;background:#ff6600;color:#fff;font-size:14px;
        z-index:40;text-align:center;line-height:0.2rem;font-weight:bolder;
    }
}
`