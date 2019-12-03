import styled from "styled-components";
export const HeaderContainer = styled.div`
width: 100%;height: 0.4rem;background: #FF6600;
position:absolute;top:0;
z-index:10;
div{
    width:50%;
    float:left;
    height:100%;
}
.left{
   .a1{
    display: block;
    min-width:1.53rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size:13px;
    color: #fff;
    span{
        font-size: 16px;
        margin-left:10px;
        margin-right:5px;
    } 
}
}
.right{
    position:relative;
    .search{
        position:absolute;
        display:block;
        width:1rem;
        height:0.24rem;
        border:0;
        font-size:0.12rem;
        border-radius:0.03rem;
        background:#fff;
        left:0.4rem;
        top:0.1rem;
        text-align:center;
        line-height:0.24rem;
        color:#ccc;
        i{
            display:block;
            width:0.2rem;
            height:0.24rem;
            font-size:0.16rem;
            display:flex;
            align-items:center;
            justify-content:center;
            margin-left:10px;
        }
        span{
            position:absolute;
            top:0;
            font-size:0.12rem;
        }
    }
    a{
        display:flex;
        position:absolute;
        right:0;
        align-items:center;
        justify-content:center;
        width:0.4rem;
        height:0.4rem;
        img{
            width:0.24rem;
            height:0.24rem;
        }
    }
}
`