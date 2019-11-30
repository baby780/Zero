const proxy = require("http-proxy-middleware");
module.exports = (app)=>{
    app.use("/ajax",proxy({
        target:"http://tjlivtc.0xiao.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}