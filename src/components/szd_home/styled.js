import styled from "styled-components";
export const MainContent = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
padding:0.4rem 0 0.5rem 0;
overflow:auto;
background:#e9e9e9;
.box{
    position:relative;
}
.first{
    width:100%;
    height:1.88rem;
    a{
        display:block;
        width:100%;
        height:100%;
        img{
            width:100%;
            height:100%;
            float:left;
        }
    }
}
.slider_item{
    width:100%;
    height:2.1rem;
    background:#fff;
    .a{
        width:0.93rem;
        height:0.96rem;
        float:left;
        display:flex;
        flex-direction:column ;
        align-items:center;
        justify-content:center;
        div{
            width:0.46rem;
            height:0.46rem;
            img{
                width:100%;
                height:100%;
            }
        }
        span{
            width:100%;
            height:0.34rem;
            font-size:0.14rem;
            color:#333;
            text-align:center;
            line-height:0.34rem;
        }
    }
}
.site_marquee{
    width:100%;height:0.35rem;border-top:1px solid #eee;background:#fff;
    display:flex;line-height:0.35rem;
    .must{
        width:0.6rem;height:0.3rem;
        line-height:0.3rem;
        margin-left:18px;
        .italic{
            color:#FF6600;
            font-family: "华文行楷";
            font-style: italic;
            font-size:0.14rem;
            float:left;
        }
    }
    .marquee_box{
        width:2.75rem;height:100%;
        a{
            display:block;
            width:100%;
            height:100%;
            font-size:0.14rem;
            line-height:0.35rem;
            margin-left:20px;
            color:#999;
            cursor:pointer
        }
    }
    span{
        font-size:0.14rem;
        color:#999;
    }
}
.service_item{
    width:100%;height:1.37rem;
    margin:20px 0;background:#fff;
    padding:10px 0;
    a{
        display:block;
        width:50%;height:0.57rem;
        color:#FF6600;float:left;
        padding:10px;
        img{
            width:0.36rem;height:0.36rem;float:left;
            margin-right:5px;
        }
        font-size:0.16rem;
        p{
            font-size:12px;
            line-height:0.2rem;
            color:#aaa;
        }
    }
    .first{
        border-right:1px solid #ccc;
    }
    .second{
        border-left:1px solid #ccc;
    }
    .three{
        border-right:1px solid #ccc;
        border-top:1px solid #ccc;
    }
    .four{
        border-left:1px solid #ccc;
        border-top:1px solid #ccc
    }
}
.mend{
    width:100%;height:1.21rem;background:#fff;
    span{
        display:block;
        width:100%;height:0.44rem;padding-left:20px;
        display:flex;align-items:center;
        b{
            border-left:5px solid #FF6600;font-size:0.16rem;
            padding-left:5px;float:left;
        }
    }
    div{
        width:100%;height:0.77rem;
        img{
            width:100%;height:100%;
        }
    }
}
.offer{
    display:flex;width:100%;height:0.4rem;align-items:center;
    background:#fff;margin-top:15px;padding-left:20px;
    b{
        border-left:5px solid #FF6600;font-size:0.16rem;
        padding-left:5px;float:left;
    }
}
.site_sale{
    width:100%;height:1.25rem;
    display:flex;background:#fff;
    a{
        width:0.77rem;height:100%;display:flex;flex-direction:column;
        align-items:center;margin: 0 20px;
        img{
            width:100%;height:0.6rem;
        }
        .sale_goods_name{
            margin:4px 0 3px 0;
            font-size:0.12rem;
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            -webkit-box-pack: center;
        }
        .ove{
            font-size:0.14rem;color:#e22;float:left;
            margin-top:10px;
        }
        .cost{
            font-size:0.12rem;color:#ccc;margin-left:10px;float:left;
            margin-top:15px;
            text-decoration:line-through;
        }
    }
}
.hot_tag{
    width:100%;height:0.55rem;display:flex;background:#fff;margin-top:20px;
    li{
        display:block;
        width:50%;height:100%;
        text-align:center;line-height:0.55rem;font-size:0.16rem;
        
    }
    .hover{
        color:#e63;border-bottom:2px solid #f60;
    }
}
ul{
    width:100%;border-top:1px solid #ccc;
    li{
        width:100%;border-bottom:1px solid #ccc;
        background:#fff;
        .tiao{
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
                right:20px;
                top:20px;
                font-size:0.25rem;
                color:#090;
            }
            .close{
                position:absolute;
                
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
                top: 52px;
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
.user_service{
    display:block;width:0.4rem;height:0.4rem;
    position:fixed;bottom:1.4rem;right:0.2rem;z-index:30;
    background:#FF6600 url('https://static.0xiao.com/Public/release/img/home/user_service-8939607878.png') no-repeat center center;
    background-size:75%,75%;border-radius:50%;
}
.active{
    color:#e63;border-bottom:3px solid #f60;
}
`