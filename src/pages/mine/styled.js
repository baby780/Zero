import styled from "styled-components";

export const Minecontent = styled.div`
    position: fixed;
    left:0;
    top:0rem;
    bottom:0rem;
    right:0;
    padding-bottom:0.5rem;
    overflow-y:auto;

`
export const MineTop = styled.div`
    height:1.2rem;
    width:100%;
    background: linear-gradient(#fef1e5,#fff);
    padding:0.35rem 0.1rem 0.1rem 0.1rem;
    display:flex;
    .user_head{
        width:0.75rem;
        height:100%;
        position: relative;
        margin-right:3%
        img{
            width:100%;
            height:100%
            border-radius: 50%;
        }
        em{
            position: absolute;
            font-size:0.12rem;
            right: -5px;
            bottom: 2px;
            width: 0.2rem;
            height: 0.2rem;
            line-height: 0.2rem;
            border-radius: 50%;
            border: 1px solid #fff;
            background: #ff32a6;
            text-align:center;
            color:#fff;
        }
    }
    .ovh{
        display:flex;
        width:2rem;
        height:0.5rem;
        display:flex;
        flex-direction:column;
        p:nth-child(1){
            width:100%;
            height:0.25rem;
            display:flex;
            align-items:center;
            span{
                font-size:0.16rem;
                font-weight: bold;
            }
            img{
                height:0.17rem;
                width:0.5rem;
                margin-left:2%
            }
        }
        p:nth-child(2){
            width:100%;
            height:0.2rem;
            display:flex;
            padding-top:0.05rem;
            em{ 
                font-size:0.12rem;
                color:#999;
            }
        }
    }
`

export const MineNav = styled.ul`
    width:100%;
    display:flex;
    height:1.2rem;
    padding:0.1rem 0.1rem 0.15rem 0.1rem;
    li{
        width:0.98rem;
        height:100%;
        display:flex;
        flex-direction:column;
        padding:0.1rem 0;
        align-items:center;
        img{
            width:0.44rem;
            height:0.44rem;
            margin-bottom:0.05rem;
        }
        p{
            font-size:0.12rem;
            color: #999;
        }
    }


`
export const Minelinks_list = styled.ul`
    width:100%;
    height:2.25rem;
    display:flex;
    flex-direction:column;
    border-top:0.1rem solid #e9e9e9;
    border-bottom:0.1rem solid #e9e9e9;
    li{
        width:100%;
        height:0.45rem;
        padding:0 0.1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .li_left{
            height:100%;
            width:1rem;
            font-size:0.14rem;
            display:flex;
            justify-content:space-around;
            align-items:center;
            img{
                width:0.15rem;
                height:0.15rem;
            }
        }
        .icon-zuo{
            font-size:0.14rem;
            color:#ccc;
        }
    }
`

export const Minelinks_list2 = styled.ul`
    width:100%;
    height:0.9rem;
    display:flex;
    flex-direction:column;
    border-bottom:0.1rem solid #e9e9e9;
    li{
        width:100%;
        height:0.45rem;
        padding:0 0.1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .li_left{
            height:100%;
            width:1rem;
            font-size:0.14rem;
            display:flex;
            justify-content:space-around;
            align-items:center;
            img{
                width:0.15rem;
                height:0.15rem;
            }
        }
        .icon-zuo{
            font-size:0.14rem;
            color:#ccc;
        }
    }
`
export const Minelinks_list3 = styled.ul`
    width:100%;
    height:1.35rem;
    display:flex;
    flex-direction:column;
    border-bottom:0.1rem solid #e9e9e9;
    li{
        width:100%;
        height:0.45rem;
        padding:0 0.1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .li_left{
            height:100%;
            width:1rem;
            font-size:0.14rem;
            display:flex;
            justify-content:space-around;
            align-items:center;
            img{
                width:0.15rem;
                height:0.15rem;
            }
        }
        .icon-zuo{
            font-size:0.14rem;
            color:#ccc;
        }
    }
`
export const MineBottom=styled.div`
    width:100%;
    height:0.59rem;
    display:flex;
    background:#e9e9e9;
    flex-direction:column;
    align-items:center;
    img{
        width:0.8rem;
        height:0.16rem;
    }
    p{
        color: #E1E1E1;
        font-size:0.12rem;
        margin-top:0.1rem;
        font-weight:blod;

    }

`