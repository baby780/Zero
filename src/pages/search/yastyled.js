import styled from "styled-components"
export const Yzsearch=styled.div`
display:flex;
flex-direction:column;
.content{
        width:100%;
        display: flex;
        flex-direction: column;
        /* position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0.5rem; */
      


        span{
            padding:0.1rem;
            display:block;
            width:100%;
            height:1.3rem;
            display: flex;
            justify-content:space-between;
           
            img{
                width:0.67rem;
                height:0.67rem
            }
            p{
                width:2rem;
                height:100%;
                display: flex;
                flex-direction: column;
                justify-content:flex-start;
                span{
                    font-size:0.12rem;
                    padding:0;
                    display: flex;
                    justify-content:flex-start;

                }
                .span1{
                    font-weight:600;
                    font-size:0.16rem
                }
            }
            div{
                height:100%;
                width:0.44rem;
                display: flex;
                flex-direction: column;
                align-items:center;
                border-bottom:0.01rem solid #ccc
                span{
                    display:block;
                    width:0.4rem;
                    height:0.3rem;
                    padding:0;
                    font-size:0.3rem;
                    color:#090
                }
                p{
                    width:0.46rem;
                    height:0.16rem;
                    background: #22CCFF;
                    color:#fff;
                    font-size:0.10rem;
                    border-radius: 10px 0 10px 0;
                    margin-top:0.1rem;
                    text-align:center
                }
            }
        }
    }
`