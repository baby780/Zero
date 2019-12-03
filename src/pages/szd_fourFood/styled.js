import styled from "styled-components";
export const FourContent = styled.div`
width:100%;height:100%;padding-bottom:.5rem;overflow-y:auto;
.header{
    width:100%;height:0.4rem;display:flex;justify-content:space-between;background:#FF0000;
    span{
        display:block;width:0.4rem;height:100%;text-align:center;line-height:0.4rem;
        font-size:22px;color:#fff;
    }
    h2{
        flex:1;height:100%;font-size:16px;font-weight:400;
        text-align:center;line-height:0.4rem;color:#fff;
    }
}
.img1{
    width:100%;height:1.87rem;
    img{
        width:100%;height:100%;
    }
}
`