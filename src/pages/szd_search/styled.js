import styled from "styled-components";
export const SearchContent = styled.div`
width:100%;height:100%;position:relative;
.site_search{
    width:100%;height:0.5rem;background:#fff;
    display:flex;justify-content:space-between;background:#fff;
    align-items:center;border-bottom:1px solid #ccc;
    .back{
        display:block;width:0.4rem;height:0.3rem;font-size:0.25rem;
        text-align:center;
    }
    input{
        width:60%;height:0.32rem;border:1px solid #999;text-align:center;
        font-size:0.12rem;
    }
    button{
        width:18%;height:0.32rem;border:0;background:#FF6600;border-radius:10px;
        font-size:0.14rem;color:#fff;margin-right:20px;
    }
}
.hotSearch{
    width:100%;height:0.97rem;
    p{
        width:100%;line-height:0.4rem;
        font-size:0.14rem;color:#333;border-bottom:1px solid #ddd;margin-left:10px;
    }
    .classify{
        width:100%;height:1.3rem;margin-left:10px;
        span{
            display:block;
            float: left;
            margin: 10px 8px 0 0;
            padding: 10px 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;font-size:0.12rem;color:#333;
        }
    }
}

`

export const SearchPrudect = styled.div`
    width:100%;height:100%;position:absolute;top:0.5rem;background:#fff;z-index:10;
    padding:10px 0;
    overflow-y:auto;
    ul{
    width:100%;
    li{
        width:100%;border-bottom:1px solid #ccc;
        background:#fff;
        a{
            display:block;width:100%;min-height:1.1rem;padding:10px 20px;
            position:relative;
            img{
                width:0.67rem;height:0.67rem;border-radius:5px;margin-right:30px;
                float:left;
            }
            .ove{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            h2{
                font-size:16px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .clo1{
                display:flex;align-items:center;
                margin-top:5px;
                div{
                    display:flex;
                    margin-right:0.1rem;
                    i{
                    display:block;
                    width:0.16rem;height:0.16rem;
                    text-align:right;
                    background: url(${"https://static.0xiao.com/Public/release/img/home/index/shop_stars-728796cf8e.png"}) no-repeat center center;
                    background-size:100% 100%;
                    margin-right:10px;
                    }
                    span{
                        color:#FFAF03;
                        font-size:0.14rem;
                    }
                }
                font-size:0.12rem;
                margin-bottom:5px;
            }
            .clo2{
                font-size:0.12rem;color:#666;
                span{
                    color:#FF3939;
                    margin-right:20px;
                }
            }
            .clo3{
                font-size:0.12rem;color:#333;display:flex;
                margin-left:0.78rem;width:2rem;
                overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
                i{
                    display:block;
                    width:0.14rem;height:0.14rem;
                    background: url(${"https://static.0xiao.com/Public/release/img/home/shop_keywords-b2f3ad83f3.png"}) no-repeat center center;
                    background-size:100% ,100%;
                    margin-right:10px;
                }
                margin-top:10px;
            }
            .address{
                font-size:0.12rem;color:#333;display:flex;
                i{
                    display:block;
                    width:0.14rem;height:0.14rem;
                    background: url(${"https://static.0xiao.com/Public/release/img/home/shop_address-eba5780876.png"}) no-repeat center center;
                    background-size:100% ,100%;
                    margin-right:10px;
                }
                margin-left:0.79rem;
                margin-top:10px;
            }
            .open{
                position:absolute;
                z-index:20;
                right:20px;
                top:20px;
                font-size:0.25rem;
                color:#090;
            }
            .close{
                position:absolute;
                z-index:20;
                right:20px;
                top:20px;
                font-size:0.12rem;
                color:#f60;
            }
            .school{
                display:block;
                position: absolute;
                z-index: 9;
                right: 10px;
                top: 42px;
                width: 58px;
                line-height: 20px;
                text-align: center;
                font-size: 12px;
                color: #fff;
                background: #f60;
                opacity: .5;
                border-radius: 10px 0 10px 0;
                -webkit-transform: scale(.8,.8);
                transform: scale(.8,.8);
            }
        }
    }
}
`