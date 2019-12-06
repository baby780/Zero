import styled from "styled-components"
export const Yzlist = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    .header{
        width:100%;
        height:0.92rem;
        background:#ccc;
        display:flex;
        flex-direction: column;
        .top{
            width:100%;
            height:0.42rem;
            display:flex;
            justify-content:space-between;
            padding:0 0.1rem;
            position: fixed;
            top:0;
            background:#ccc;
            z-index:50;
            .left{
                height:100%;
                width:0.42rem;
                display:flex;
                align-items:center;
                justify-content:space-around;
                i{
                    font-size:0.15rem;
                    color: #fff;
                }
            }
            .right{
                display:flex;
                width:1.26rem;
                height:100%;
                i{
                    font-size:0.22rem;
                    color: #fff;
                    width:0.42rem;
                    height:100%;
                    text-align:center;
                    line-height:0.42rem;
               }
            }
        }
        .tilte{
            width:100%;
            height:0.5rem;
            margin-top:0.42rem;
            font-size:0.18rem;
            text-align:center;
            line-height:0.5rem;
            background:#c1c1c1
        }
    }
    .content{
        width:100%;
        .cl{
            width:45%;
            float:left;
            height:2.7rem;
            margin:0.02rem 0.07rem 0.1rem 0.07rem;
            display:flex;
            flex-direction: column;
            border:0.01rem solid #ccc;
            box-shadow:0.03rem 0.03rem #ccc;
            img{
                width:1.63rem;
                height:1.63rem
            }
            p{
                font-size:0.16rem;
                font-weight:600;
                width:1.63rem;
                height:0.36rem;
                line-height:0.36rem;
            }
            .money{
                width:1.63rem;
                height:0.26rem;
                display:flex;
                line-height:0.26rem
                
                span{
                    font-size:0.14rem;
                    width:0.4rem;
                    float:left;
                    color:#c33;
                    font-weight:400
                }
                del{
                    font-size:0.14rem;
                    width:0.4rem;
                    float:left;
                    color:#ccc;
                    font-weight:400
                }
            }
            .mai{
                width:1.63rem;
                height:0.3rem;
                line-height:0.3rem;
                span{
                    font-size:0.12rem;
                    width:0.54rem;
                    height:0.18rem;
                    border:1px solid #c33;
                    font-weight:100;
                    border-radius:0.04rem
                }
                button{
                    float: right;
                    padding: 2px 15px;
                    font-size: 12px;
                    line-height: 20px;
                    color: #fff;
                    border: none;
                    border-radius: 15px;
                    background: #22CCFF;
                    margin-top:0.03rem;
                    }
            }
        }
    }
`