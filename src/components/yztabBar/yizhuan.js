import styled from "styled-components";

export const TabBarContainer = styled.div`
width:100%;
height: 0.5rem;
background: #fff;
position: fixed;
left:0;
bottom: 0;
border-top:1px solid #ccc;
ul{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:0.14rem;
    .active{
        color:#22CCFF ;
    }
    li{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
        i{
            font-size:.2rem;
        }
        span{
            font-size: .15rem;
        }
    
    
    }
}

`