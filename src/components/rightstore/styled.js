import styled from "styled-components";
export const DianRight =styled.ul`
            width:2.7rem;
            display:flex;
            flex-direction:column;
            p{
                width:100%;
                height:0.34rem;
                padding: 0rem 0.1rem;
                font-size:0.14rem;
                color:#555;
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
                    border-radius:0.05rem;
                    margin-right:0.1rem;
                }
                span{
                    width:2.2rem;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    padding-right:0.08rem;
                    h2{
                        font-size:0.13rem;
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
                            color: #e22;
                        }
                        .circle{
                            width:0.2rem;
                            height:0.19rem;
                            background:#FF0000;
                            color:#fff;
                            font-size:0.15rem;
                            text-align:center;
                            line-height:0.19rem;
                            border-radius:50%;
                        }
                    }
                }
            }
        }
    

`