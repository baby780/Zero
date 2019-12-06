import styled from "styled-components";
export const Historycenter  = styled.div`
    width:100%;
    h2{
        display:flex;
        width:100%;height:0.36rem;background:#fff;padding:0 20px;
        font-size:0.16rem;line-height:0.36rem;margin-top:20px;position:relative;
        span{
            margin-right:10px;
        }
        i{
            font-size:0.16rem;position:absolute;right:20px;
            font-weight:normal
        }
    }
    .content{
        width:100%;border-top:1px solid #f3f3f3;
        display:flex;flex-direction:column;
        
        li{
            width:100%;
            min-height:0.65rem;
            background:#fff;
            padding: 20px 0.1rem;
            border-bottom:1px solid #ccc;
            img{
                width:0.48rem;height:0.48rem;float:left;margin-right:10px;
            }
            .p1{
                font-size:0.14rem;
            }
            .p2{
                font-size:0.12rem;color:#ccc;
                float:left;margin-top:15px;text-align:left;
            }
            .p3{
                font-size:0.12rem;color:#ccc;margin-top:15px;
                float:right;
            }
        }
    }
`
export const CommentCity=styled.div`
    width:100%;height:100%;position: relative;
    div{
        width:100%;height:2.18rem;display:flex;flex-direction:column;
    justify-content:center;align-items:center;
    }
    img{
        width:1rem;height:1rem;
    }
    p{
        font-size:0.16rem;text-align:center;margin-top:0.3rem;color:#ccc;
    }
    .am-accordion-header{
        width:100%;
    }
`