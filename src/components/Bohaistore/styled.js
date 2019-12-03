import styled  from "styled-components";
export const BohaiStore =styled.div`
    width:100%;
    margin-top:0.12rem;
    display:flex;
    flex-direction:column;
    .content_top{
        width:100%;
        height:0.42rem;
        display:flex;
        background:#fff;
        li{
            height:100%;
            width:1.25rem;
            font-size:0.15rem;
            text-align:center;
            line-height:0.42rem;
        }
       .activess{
            border-bottom: 0.03rem solid #f60;
            color: #e63;
        }
    }
    .content{
        width:100%;
        display:flex;
        flex-direction:column;
        background:#fff;
        li{
            width:100%;
            height:1.13rem;
            padding:0.12rem 0.1rem 0.1rem 0.1rem;
            display:flex;
            .left{
                height:100%;
                width:0.57rem;
                margin-right:0.08rem;
                img{
                    width:0.57rem;
                    height:0.57rem;
                    border-radius: 0.05rem;
                    
                }
            }
           .right{
                height:100%;
                width:2.9rem;
                display:flex;
                flex-direction:column;
                position: relative;
                i{
                    position: absolute;
                    font-size:0.3rem;
                    z-index:20;
                    right:0.3rem;;
                    color:#39c;

                }
                h2{
                    font-size:0.12rem;
                }
                p:nth-child(3){
                    width:100%;
                    height:0.21rem;
                    margin-top:0.05rem;
                    font-size:0.12rem;
                    line-height:0.21rem;
                    color:#666;
                    em{
                        font-size:0.12rem;
                        color: #FFAF03;
                        margin-right:0.05rem;
                    }
                    b{
                        font-size:0.1rem;
                        color: #FFAF03;
                        margin-right:0.08rem;
                    }
                    span{
                        font-size:0.1rem;
                       
                    }
                }
                p:nth-child(4){
                    width:100%;
                    display:flex;
                    height:0.21rem;
                    font-size:0.12rem;
                    line-height:0.21rem;
                    color:#666;
                    span{
                      
                        width:0.5rem;
                        height:100%;

                        font-size:0.12rem;
                        color: #FF3939;
                        margin:0;
                        
                    }
                }
                p:nth-child(5){
                    width:100%;
                    height:0.15rem;
                    font-size:0.1rem;
                    line-height:0.15rem;
                    color:#666;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
            
                }
                p:nth-child(6){
                    width:100%;
                    height:0.15rem;
                    font-size:0.1rem;
                    line-height:0.15rem;
                    color:#666;
                }
            }
        }
    }

`