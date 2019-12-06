import styled from "styled-components";

export const OrderContent=styled.div`
    position: fixed;
    left:0;
    top:0rem;
    bottom:0rem;
    right:0;
    padding-bottom:0.5rem;
    overflow-y:auto;
    background: #f3f3f3;
    .Order_list{
        width:100%;
        display:flex;
        flex-direction:column;
     li{
        width:100%;
        height:1.6rem;
        display:flex;
        flex-direction:column;
        border-top: 0.012rem solid #ddd;
        border-bottom: 0.012rem solid #ddd;
        padding:0 0.1rem;
        position: relative;
        background:#fff;
        margin-top:0.2rem;
            button{
                position: absolute;
                right:0.1rem;;
                bottom:0.55rem;
                color: #39c;
                width:0.5rem;
                height:0.23rem;
                font-size:0.12rem;
                line-height:0.19rem;
                border-radius: 0.03rem;
                border: none;
                text-align:center;
            }
            h2{
                width:100%;
                height:0.3rem;
                display:flex;
                justify-content:space-between;
                font-size:0.15rem;
                font-style: normal;
                align-items:center;
                border-bottom: 0.012rem solid #eee;
            }
            i{
                font-size:0.12rem;
                color:#ccc;
            }
            p{
                width:100%;
                height:0.3rem;
                font-size:0.13rem;
                line-height:0.3rem;
                color: #333;
                a{
                    color: #39c;
                    font-size:0.15rem;
                }
                .green{
                    color: #090;
                    font-size:0.14rem;
                }
                b{
                    color: #e22;
                    font-size:0.14rem;
                }
            }
           .botton{
                width:100%;
                height:0.3rem;
                display:flex;
                justify-content:space-between;
                .icon-paobu{
                    font-size:0.12rem;
                    color: #3191e8
                }
            }
        }   

    }
   

`

export const Orderlike=styled.div`
    width:100%;
    height:1.96rem;
    display:flex;
    flex-direction:column;
    margin-top:15%;
    h2{
        font-size:0.14rem;
        color: #666;
        width:100%;
        padding-left:0.1rem;

    }
    .list{
        width:100%;
        height:100%;
        display:flex;
        overflow-x:auto;
        a{
            width:1rem;
            height:100%;
            display:flex;
            margin: 0 0.05rem 0 0.08rem;
            padding:0 0.03rem;
            flex-direction:column;
           background:#fff;
            img{
                width:0.94rem;
                height:1rem;
            }
            p{
                width:100%;
                height:0.2rem;
                line-height:0.2rem;
                font-size:0.12rem;
                margin-top:0.1rem;
            }
            i{
                font-size:0.12rem;
                color: #e22;
                margin-top:0.1rem;
            }
        }
    }


`