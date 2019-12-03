import styled from "styled-components";
export const FoodContent = styled.div`
    width:100%;height:100%;overflow-y:auto;
    .header{
        width:100%;height:0.47rem;
        span{
            display:flex;width:0.42rem;height:0.42rem;align-items:center;
            justify-content:center;font-size:22px;
        }
        span:nth-of-type(1){
            float:left;
        }
        span:nth-of-type(2){
            float:right;font-size:28px;
        }
        span:nth-of-type(3){
            float:right;font-size:28px;
        }
        span:nth-of-type(4){
            float:right;
        }
    }
`