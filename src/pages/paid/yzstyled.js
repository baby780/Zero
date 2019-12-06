import styled from "styled-components"
export const Yzpaid = styled.div`
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
    .am-radio-inner{
        border-radius:50%;
        border:1px solid #ccc;
    }
    .con{
        width:100%;
        height:0.56rem;
        display:flex;
        justify-content:space-between;
        padding:0.05rem 0.2rem 0 0.1rem;
        .am-list{
            width:100%
        }
        p{
            font-size:0.16rem
        }
    }
    .radio{
        padding:0.1rem;
    }
    .con1{
        width:110%;
        height:0.5rem;
        display:flex;
        justify-content:space-between;
        margin-left:0.1rem
        /* padding:0.05rem 0.2rem 0.05rem 0.1rem; */
        
        input{
            width: 100%;
            width: calc(100% - 65px);
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            vertical-align: top;
            border: 1px solid #ccc;
            font-size: 15px;
            line-height: 20px;
            /* padding: 2px 3px; */
        }
        }
    /* .img{
        width:100%;
        height:0.5rem;
        display:flex;
        justify-content:space-around;
        /* padding:0.05rem 0.2rem 0.05rem 0.1rem; */
    
    /* .am-image-picker-item-content{
        width:60%;
        height:100%
    } 
    .am-image-picker{
        width:60%;
        height:100%
    }
    .am-wingblank.am-wingblank-lg{} */
    .am-wingblank .am-wingblank-lg{
        width:1rem;
        height:1rem;
    }
`