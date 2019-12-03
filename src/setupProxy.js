const proxy=require("http-proxy-middleware");
module.exports=(app)=>{
    app.use("/ajax",proxy({
        target:"https://tjbhzy.0xiao.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
        
    },))
}
// https://tjbhzy.0xiao.com


//247

// https://sjzmc.0xiao.com/Shop/getBindShopGoods?shop_id=82018