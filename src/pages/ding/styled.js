import styled from "styled-components";

export const DingTop=styled.div`
    width:100%;
    height:0.4rem;
    background: #FF0000;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 0.1rem;
    i{
        color:#fff;
        height:100%;
        width:0.5rem;
        line-height:0.4rem;
        font-size:0.18rem;
    }
    p{
        color:#fff;
        font-size:0.15rem;
    }


`
export const DingConent=styled.div`
    width:100%;
    ul{
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
    }
    li{
        width:100%;
        height:0.58rem;
        display:flex;
        flex-direction:column;
        border-bottom: 0.01rem solid #ddd;
        padding:0 0.1rem;
        h3{
            width:100%;
            height:0.29rem;
            font-size:0.14rem;
            font-weight:blod;
            line-height:0.29rem;
        }
        p{
            width:100%;
            height:0.29rem;
            display:flex;
            justify-content:space-between;
            i{
                height:100%;
        
                font-size:0.14rem;
                color: #e22;
                line-height:0.29rem;
            }
            span{
                height:100%;
                font-size:0.18rem;
                color:#ccc;
                line-height:0.29rem;
            }
        }
    }


`

export const DingBotton =styled.div`
    width:100%;
    height:2rem;
    border-top:0.78rem solid  #f5f5f5;
    ul{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
       
    }
    li{
        height:0.3rem;
        width:100%;
        display:flex;
        padding:0 0.1rem;
        font-size:0.12rem;
        line-height:0.3rem;
        .right{
            display:flex;
            width:3.2rem;
            height:100%;
            justify-content:space-between;
        }
        .clo9{
            height:100%;
            color: #999;
            font-size:0.1rem;
            margin-left:0.1rem;
            display:flex;
            justify-content:space-around;
            align-items:center;
            
        }
        .red{
            font-size:0.12rem;
            color: #e22;
           
           
        .subtotal_price{
            font-size:0.14rem;

            }
        }
    }



`

export const Dingss=styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-top:0.3rem solid  #f5f5f5;
    .phone_login_button{
        margin:0.2rem 0;
        width: 2rem;
        height: 0.4rem;
        border: none;
        border-radius: 0.03rem;
        background: #FF0000;
        color:#fff;
        font-size:0.16rem;
    }

`