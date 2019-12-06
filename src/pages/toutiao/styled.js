import styled from "styled-components"
export const Yztou=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    background: #f3f3f3;
    .header{
        width:100%;
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 750px;
        height: 0.42rem;
        line-height: 0.42rem;
        overflow: hidden;
        color:#fff;
        background: #22CCFF;
        display:flex;
        justify-content:space-between;
        padding :0 0.2rem;
        span{
            font-size:0.2rem
        }
        p{
            font-size:0.16rem
        }
    }
    .content{
        display:flex;
        flex-direction:column;
        overflow:hidden;
        div{
            width:100%;
            height:0.66rem;
            margin-top:0.2rem;
            background:#fff;
            span{
                display:block;
                width:100%;
                height:0.56rem;
                padding:0.08rem 0.1rem;
                display:flex;
                justify-content:space-around;
                img{
                    width:0.48rem;
                    height:0.48rem;
                }
                p{
                    width:1.6rem;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    font-size:0.14rem;
                    /* padding:0.08rem; */
                    strong{
                        font-size:0.12rem;
                        font-weight:100
                    }
                }
                span{
                    display:flex;
                    align-items:flex-end;
                    font-size:0.12rem;
                    width:1.2rem;
                    color:#ccc;
                    padding:0.15rem 0.1rem;
                }
            }
        }
    }
`