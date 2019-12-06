import styled from "styled-components";
export const HeaderConnect = styled.div`
width:100%;height:100%;
.head{
    width:100%;height:0.36rem;
    background:#fff;display:flex;position:absolute;top:0;z-index:10;
    justify-content:space-around;
    li{
        width:25%;height:100%;font-size:0.16rem;line-height:0.36rem;
        text-align:center;
    }
}
.school{
    width:100%;height:100%;position:absolute;top:0;
    padding:0.36rem 0 0.5rem 0;background:#e9e9e9;overflow-y:auto;
    
}
.active{
    border-bottom: 2px solid #e22;
    color:#f60
}
`