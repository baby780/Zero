import styled from "styled-components";

export const DianZong=styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow-y:auto;

`
export const DianHeader=styled.div`
    width:100%;
    height:0.42rem;
    display:flex;
    justify-content:space-between;
    padding:0 0.1rem;
    position: fixed;
    top:0;
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
    
`
export const DianTop =styled.div`
    background: url(https://u2.0xiao.cn/3cfood_shop/license/image/ec662f512e955873.jpeg) center center no-repeat;
    background-size: cover;
    width:100%;
    height:2rem;
    overflow:hidden;
    filter: blur(12px);
    z-index:0;
    position: relative;
   
    
    
`
export const DianTopBox =styled.div`

    width:100%;
    height:2rem;
    background: linear-gradient(rgba(0,0,0,.3),rgba(255,255,255,1));
    display:flex;
    position: absolute;
    top:0;
    .shop_info{
    width:4.5rem;
    height:1.2rem;
    background:#fff;
    margin:0.82rem 0.2rem 0 0.2rem;
    border-radius: 0.05rem;
    background:#fff;
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
        

        width:0.7rem;
        height:0.7rem;
        border-radius: 0.05rem;
        margin-top:-0.35rem;
    }
    h2{
        width:100%;
        height:0.25rem;
        line-height:0.25rem;
        font-size:0.15rem;
        text-align:center;
        margin-top:0.07rem;
    }
    span{
        font-size:0.1rem;
        color: #888;
    }
    p{
        width:0.66rem;
        height:0.15rem;
        color: #FF3B3B;
        border: 0.02px solid #ffa3a3;
        background: #FFEDED;
        font-size:0.12rem;
        text-align:center;
        line-height:0.15rem;
        margin-top:0.05rem;
    }
    .school{
        margin-top:0.03rem;
        font-size:0.1rem;
        color: #888;
    }
    i{
        position: absolute;
        width: 0.36rem;
        height: 0.36rem;
        top: -0.18rem;
        right: 0.15rem;
        border-radius: 50%;
        background: #fff url(https://static.0xiao.com/Public/release/img/shop_on_coll-962049de62.png) center 55% no-repeat;
        background-size: 60%;
        -webkit-box-shadow: 0 0 5px #8b8b8b;
        box-shadow: 0 0 5px #8b8b8b;
    }
}


`
/* */



export const DianSan=styled.div`
    width:100%;
    height:0.36rem;
    display:flex;
    justify-content:space-around;
    position: sticky;
    top: 0;
    background:#fff;
    li:nth-child(1){
        height:100%;
        width:1rem;
        text-align:center;
        line-height:0.36rem;
        display:flex;
        justify-content:space-around;
        a:nth-child(1){
            height:100%;
            display:block;
            padding-bottom:0.1rem;
            border-bottom: 0.03rem solid #ff3b3b;
            color: #222;
            font-size:0.14rem;
        }
   
    }
    li:nth-child(2) {
        height:100%;
        width:1rem;
        text-align:center;
        line-height:0.36rem;
        display:flex;
        justify-content:space-around;
        a{
            height:100%;
            display:block;
            padding-bottom:0.1rem;
            color: #888;
            font-size:0.14rem;
        }
    }  
    li:nth-child(3) {
        height:100%;
        width:1rem;
        text-align:center;
        line-height:0.36rem;
        display:flex;
        justify-content:space-around;
        a{
            height:100%;
            display:block;
            padding-bottom:0.1rem;
            color: #888;
            font-size:0.14rem;
        }
    } 

`

export const DianContent =styled.div`
    width:100%;
    display:flex;
    .content_left{
        width:1.03rem;
        display:flex;
        flex-direction:column;
        background: #f3f3f3;
        overflow-y: auto;
        li{
            width:100%;
            height:0.34rem;
            padding:0.08rem 0.05rem;
            font-size:0.12rem;
            color: #333;
            text-align:center;
        }
    }
    .content_right{
        width:2.9rem;
        display:flex;
        flex-direction:column;
        p{
            width:100%;
            height:0.34rem;
            padding:0rem 0.1rem;
            font-size:0.14rem;
            color: #555;
            line-height:0.34rem;
        }
        li{
            width:100%;
            height:0.75rem;
            padding:0 0.1rem 0.15rem 0.1rem;
            display:flex;
            img{
                width:0.8rem;
                height:100%;
                border-radius: 0.05rem;
                margin-right:0.1rem;
            }
            span{
                width:2.2rem;
                height:100%;
                display:flex;
                flex-direction:column;
                padding-right:0.08rem;
                h2{
                    font-size: 0.16rem;
                }
                i{
                    font-size:0.12rem;
                    color:#888;
                    margin-top:0.02rem;
                }
                b{
                    width:100%;
                    height:0.2rem;
                    display:flex;
                    justify-content:space-between;
                    margin-top:0.03rem;
                    i{
                        font-size:0.12rem;
                        color: #e22;
                    }
                    .circle{
                        width:0.2rem;
                        height:0.19rem;
                        background: #FF0000;
                        color:#fff;
                        font-size:0.15rem;
                        text-align:center;
                        line-height:0.19rem;
                        border-radius: 50%;
                    }
                }
            }
        }
    }

`


export const  DianButton=styled.div`
    width:100%;
    height:0.5rem;
    background: rgba(0,0,0,.7);
    position: fixed;
    bottom:0;
    display:flex;
    justify-content:space-between
    .Button_left{
        height:100%;
        width:1.8rem;
        display:flex;
        align-items:center;
        font-size:0.18rem;
        padding:0 0.2rem;
        color:#fff;
        em{
            color: #999;
            font-size:0.12rem;
            margin-left:0.05rem;
            span{
                font-size:0.15rem;
                margin-right:0.03rem;
            }

        }
    }
    .Button_right{
        width:1.5rem;
        height:100%;
        color:#fff;
        display:flex;
        i{
            height:100%;
            color:#fff;
            width:0.5rem;
            text-align:center;
            line-height:0.5rem;
            font-size:0.15rem;
        }
        span{
            height:100%;
            background: #FF0000;
            font-size:0.18rem;
            width:1rem;
            text-align:center;
            line-height:0.5rem;
        }
    }

`