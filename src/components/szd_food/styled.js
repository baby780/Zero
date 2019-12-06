import styled from "styled-components";
export const FoodConiter = styled.div`
    width:100%;
    .table_tag{
        width:100%;height:0.36rem;display:flex;justify-content:space-around;
        align-items:center;margin-top:20px;border-top:1px solid #ddd;border-bottom:1px solid #ddd;
        background:#fff;
        span{
            width:33.3%;height:100%;font-size:16px;text-align:center;line-height:0.36rem;background:#fff;
        }
    }
    .content_box{
        width:100%;background:#f3f3f3;float:left;
        .list{
            width:25%;float:left;
            li{
                width:100%;height:0.35rem;font-size:14px;text-align:center;line-height:0.35rem;
                color:#888;
            }
        }
        .content{
            width:75%;float:right;background:#fff;
            .all{
                width:100%;height:36px;line-height:36px;font-size:14px;color:#888;
                padding-left:10px;
            }
        }
    }
    .food_ul{
        width:100%;height:100%;
        li{
            width:100%;min-height:1.25rem;margin-bottom:10px;
            img{
                width: 90px;height: 70px;border-radius: 5px;margin-right: 10px;float: left;
            }
        }
    }
    .weight{
        height:100%;position:relative;
        h3{
            margin-bottom: 5px;font-size: 16px;line-height: 20px;color: #222;
        }
        .mb{
           font-size:12px;margin-left:1rem;
        }
        .xiao{
            color: #888;font-size: 12px;margin-left:1rem;
        }
        .mt5{
            height:25px;line-height:25px;margin-left:1rem;
            i{
               color:#e22;font-size:14px;font-weight:bold;float:left
            }
            em{
               font-size:12px; color:#e22;float:left;
            }
            span{
                background:#FF6600;width: 25px;height: 25px;border-radius: 50%;
                padding: 0;line-height: 25px;display: flex;justify-content: center;
                align-items: center;font-size:18px;float:right;margin-right:10px;
                color:#fff;font-weight:bolder;
            }
        }
        
    }
.active{
    background:#fff;
}
` 