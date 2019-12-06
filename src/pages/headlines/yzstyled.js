import styled from "styled-components";
export const Yzhead=styled.div`
     width:100%;
    height:100%;
    overflow:auto;
    background:#ccc;
    margin-bottom:0.5rem;
   .content{
       width:100%;
     
       background:#fff;
       .title{
           width:100%;
           height:0.36rem;
           font-size:0.14rem;
           font-weight:600;
       }
       .con{
           width:100%;
           /* height:1.1rem; */
           display: flex;
           flex-direction:column;
          align-items:space-between;
           div{
               width:100%;
               display: flex;

            .p{
               /* height:100%; */
               width:0.1rem;
               font-size:0.16rem;
               border-bottom:0 solid #ccc;
           }
           p{
                width:3.45rem;
                height:100%;
                font-size:0.16rem;
                padding:0.06rem;
                border-bottom:0.01rem solid #ccc;
                em{
                    display:block;
                    width:3.45rem;
                    height:100%;
                    font-style:normal;
                    img{
                        width:0.46rem;
                        height:0.46rem;
                        float:left;
                      
                    }
                    b{
                        font-weight:500;
                        line-height:0.24rem
                    }
                }
            } 
           }
          
       }

   }
`