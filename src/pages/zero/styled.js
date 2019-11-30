import styled  from "styled-components";

export const  BohaiTop=styled.div`
    width:100%;
    background: #FF0000;
    height:0.4rem;
    justify-content:space-between;
    display:flex;
    position: fixed;
    top:0;
    z-index: 20;
    .left{
        width:2rem;
        height:100%;
        display:flex;
        padding:0 0.1rem;
        li{
            height:100%;
            display:flex;
            line-height:0.4rem;
            margin-right:0.05rem;
            .icon-location{
                font-size:0.2rem;
                color:#fff;
            }
        }
        li:nth-child(2){
            height:100%;
            font-size:0.12rem;
            color:#fff;
            line-height:0.4rem;
        }
    }
    .right{
        width:1.34rem;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:space-around;
        padding:0 0.08rem;
        .icon-xingtaiduICON_sousuo---copy{
            width:0.8rem;
            height:0.27rem;
            background:#fff;
            border-radius: 0.03rem;
            text-align:center;
            line-height:0.27rem;
            font-size:0.12rem;
            color: #ccc;
        
        }
        img{
            width:0.2rem;
            height:0.2rem;
        }
    }

  

`
export const BohaiContent=styled.div`
    position: fixed;
    left:0;
    top:0rem;
    bottom:0rem;
    right:0;
    background: #f3f3f3
    padding-bottom:0.5rem;
    padding-top:0.4rem;
    overflow-y:auto;
    .abbr{
        position: fixed;
        z-index: 99;
        right: 0.2rem;;
        bottom: 1.4rem;
        line-height: 0.4rem;;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.8;
        background: #FF0000 url(https://static.0xiao.com/Public/release/img/home/user_service-8939607878.png) no-repeat center center;
        background-size: 75% 75%;
        width:0.4rem;
        height:0.4rem;
    }
    .icon-paixu{
        position: fixed;
        z-index: 99;
        right: 0.2rem;;
        bottom: 0.8rem;
        line-height: 0.4rem;;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.8;
        background-size: 75% 75%;
        width:0.4rem;
        height:0.4rem;
        background: #FF0000;
        color:#fff;
        font-size:0.18rem;
        text-align:center;
      
    }
`
export const BohaiBanner =styled.div`
    width:100%;
    img{
        height:100%;
        width:100%;
    }
    .ant-carousel .slick-slide {
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        background: #ccc;
        overflow: hidden;
      
      }
      
      .ant-carousel .slick-slide h3 {
        color: #fff;
      }
      .am-wingblank.am-wingblank-lg {
       margin:0;
      }
`

export const BohaiNav =styled.div`
    width:100%;
    height:1.95rem;
    display:flex;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #fff;
    a{
        width:0.72rem;
        height:0.96rem;
        padding:0.1rem 0;
        display:flex;
        justify-content: space-around;
        flex-direction:column;
        align-items:center;
        color:#333;
        img{
            width:0.46rem;
            height:0.46rem;
        }
        p{
            font-size:0.13rem;
            margin-top:0.03rem;
        }
    }

`

export const BohaiNotice =styled.div`
    width:100%;
    height:0.3rem;
    display:flex;
    justify-content:space-around;
    border-top:1px solid #ccc;
    background: #fff;
    span:nth-child(1){
        width:0.8rem;
        height:100%;
        font-family: 华文行楷;
        color: #FF0000;
        font-size:0.15rem;
        text-align:center;
        line-height:0.3rem;
    }
    span:nth-child(2){
        width:2.5rem;
        height:100%;
        font-size:0.13rem;
        color: #999;
        line-height:0.3rem;

        
    }
    span:nth-child(3){
        width:0.3rem;
        height:100%;
        font-size:0.15rem;
        text-align:center;
        line-height:0.3rem;
        color: #999;
    }

`

export const BohaiSubfield =styled.div`
    width:100%;
    height:0.57rem;
    display:flex;
    margin-top:0.2rem;
    background:#fff;
    span {
        display:flex;
        height:100%;
        width:2rem;
        img{
            width:0.36rem;
            height:0.36rem;
            margin:5% 2% 0 7%;
        }
        .right_box{
            display:flex;
            flex-direction:column;
            height:100%;
            width:1.3rem;
            border-right: 1px solid #eee;
            a{
                color: #FF0000;
                font-size:0.15rem;
                margin-top:0.07rem;
            }
            p{
                color: #aaa;
                font-size:0.12rem;
                margin-top:0.05rem;
            }
        }
    }
`
export const BohaiSpecial =styled.div`
        width:100%;
        height:1.61rem;
        margin-top:0.12rem;
        background:#fff;
        p{
            width:100%;
            height:0.44rem;
            padding:0 0.15rem;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-item:center;
            b{
                height:0.2rem;
                font-size:0.12rem;
                line-height:0.2rem;
                padding-left:0.05rem;
                border-left: 0.05rem solid #FF6600;
            }
        }
        ul{
            width:100%;
            height:1.17rem;
            display:felx;
            justify-content:space-around;
           
        }
        li{
            display:flex;
            flex-direction:column;
            width:0.85rem;
            height:1.12rem;
            margin:0.05rem 0.04rem;
            a{
                font-size:0.12rem;
                color: #333;
                text-align:center;
            }
            .pirce{
                width:100%;
                height:0.29rem;
                display:flex;
                line-height:0.29rem;
                justify-content:space-between;
                padding:0 0.08rem;
                span:nth-child(1){
                    font-size:0.1rem;
                    color: #e22;
                }
                span:nth-child(2){
                    font-size:0.08rem;
                    color:#ccc;
                    text-decoration: line-through;
                }
            }
            img{
                width:100%;
                height:0.68rem;
            }
        }

`

