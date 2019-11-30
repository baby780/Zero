import styled from "styled-components";

export const FooterContent= styled.div`
width:100%;
height:0.5rem;
display:flex;
justify-content:space-around;
position:fixed;
bottom:0;
background:#fff;
    li{
        width:30%;height:100%;display:flex;flex-direction:column;
        align-items:center;justify-content:center;
    }
    .icon{
        font-size:18px;
    }
    .home{
        font-size:14px;
    }

.active{
    color:#FF6600;
}
`