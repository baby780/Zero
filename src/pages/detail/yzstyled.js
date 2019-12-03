import styled from "styled-components"
export const Yzdetail = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
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
        width:100%;
        padding:0.15rem;
        display:flex;
        flex-direction:column;
        align-items: center;
        p{
            width:100%;
            font-size:0.18rem;
            color:#000;
            font-weight:600;
            text-align:center;
            height:0.4rem;
            line-height:0.3rem
        }
        img{
            width:3.45rem;
            height:3.45rem
        }
        div{
            width:100%;
            height:0.32rem;
            margin:10px 5px;
            display:flex;
        justify-content:space-between;
            p{
                font-size:0.18rem;
                color:#c33;
                width:0.4rem
            }
            button{
                float: right;
                width: 1.77rem;
                height: 26px;
                max-width: 70px;
                padding: 0;
                font-size: 14px;
                color: #fff;
                background: #f85f48;
                border: none;
                border-radius: 3px;
                background: #22CCFF;
                width: 35%;
                max-width: none;
                height: 32px;
            }
        }
    }
` 