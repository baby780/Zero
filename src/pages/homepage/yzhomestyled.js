import styled from "styled-components"

export const Yihome = styled.div`
width:100%;
    height :100%;
    overflow-y:auto;
    display:flex;
    /* flex:1; */
    /* padding-bottom: .5rem; */
    flex-direction: column;
    #header{
        width:100%;
        /* height:0.4rem; */
        background:#22CCFF;
        display: flex;
        align-items: center;
        justify-content:space-around;
        p{
            height:100%;
            color:#fff;
            font-size:0.14rem;
            line-height:0.5rem;
            
        }
        span{
            display: inline-block;
            width: 0.82rem;
            height: 0.24rem;
            line-height: 0.24rem;
            vertical-align: middle;
            overflow: hidden;
            text-align: center;
            background:#fff;
            font-size:0.15rem;
            display: flex;
            align-items: center;
            justify-content:space-around;
            h2{
                width:0.2rem;
                height:100%;
                font-size:0.14rem;
                color:#ccc;
            }
            h3{
                font-size:0.14rem;
                width:0.6rem;
                height:100%;
                color:#ccc;
                font-weight:100;
            }
        }
        a{
            height:100%;
            display: flex;
            align-items: center;
            img{
                width:0.24rem;
                height:0.24rem;
                line-height:0.24rem;
            }
        }
    }
    .scro{
        width:100%;
        background:#fff;
        /* margin-top:0.4rem; */
        #banner{
        width:100%;
        height:1.87rem;
        .am-wingblank.am-wingblank-lg{
            margin:0;
            border-radius:0 0 .2rem .2rem;
            }
        }
        #center{
        width:100%;
        height:1.8rem;
        border-bottom:0.01rem solid #c1c1c1;
        a{
            width:20%;
            float:left;
            height:50%;
            padding-left:0.1rem;
            padding-top:0.08rem;
            display: flex;
            align-items: center;
            justify-content:center;
            flex-direction: column;
            display:block;
            img{
                width:0.42rem;
                height:0.42rem;
                margin-left:0.06rem;
                }
                p{
                    font-size:0.14rem;
                    margin-top:0.06rem;
                }
            }
        }
        .nav{
        width:100%;
        height:0.35rem;
        display: flex;
        align-items: center;
        justify-content:space-around;
        p{
            font-size:0.16rem;
            color:#22CCFF;
            }
        h6{
            width:2.8rem;
            font-size:0.14rem;
            color:#999;
            font-weight:400;
            }
        span{
            font-size:0.14rem;
            color:#ccc;
            }
        }
        .yh{
        width:100%;
        height:1.9rem;
        display: flex;
        align-items: center;
        justify-content:space-around;
        flex-direction: column;
       div{
           width:100%;
           height:0.06rem;
           background:#ccc
           
       }
        p{
            width:3.6rem;
            height:0.36rem;
            background:#fff;
            display: flex;
            align-items: center;

            b{
                display:block;
                width:1.6rem;
                height:0.2rem;
                font-size:0.18rem
            }
        
        }
        img{
            width:100%;
            height:0.6rem
            }
        }
        .tejia{
        width:100%;
        height:1.7rem;
        display: flex;
        align-items: center;
        justify-content:space-around;
        flex-direction: column;
        div{
            width:100%;
            height:0.06rem;
            background:#ccc
            
        }
        p{
            width:100%;
            height:0.44rem;
            display: flex;
            justify-content:space-between;
            align-items: center;
            span{
                font-size:0.18rem;
                font-weight:600

            }
            a{
                font-size:0.16rem;
                color:#39c
            }

        }
        .ovh{
            width:100%;
            height:1.25rem;
            display: flex;
            justify-content:space-around;
            background:#fff;
            a{
                height:100%;
                width:24%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:space-between;
                img{
                    width:0.77rem;
                    height:0.61rem

                }
                .p1{
                    font-size:0.14rem;
                    height:0.16rem
                }
                .p2{
                    height:0.16rem;
                    display: flex;
                    justify-content:flex-start;
                    span{
                        
                        font-size:0.14rem;
                        float:left;
                        color:#c33
                    }
                    del{
                        font-size:0.13rem;
                        float:left
                    }
                }
            }
        }
    }
    .con{
        width:100%;
        height:0.42rem;
        display: flex;
        justify-content:center;
        ul{
            width:90%;
            height:100%;
            display: flex;
            justify-content:space-between;
            align-items: center;
            li{
                font-size:0.18rem;
                border-bottom:0.02rem solid #fff;
                .active{
                    color:#c33;
                    border-bottom:0.02rem solid #c33
                }
            }
        }
    }
    }
`