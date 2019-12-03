import { fetch as fetchPro } from "whatwg-fetch";
import qs from "qs";
const get = (options) => {
    let url = options.url;
    let data = options.data;
    if (data) {
        var str = "";
        for (var key in data) {
            str += "&" + key + "=" + data[key];
        }
    }
    url = url + "?" + str.slice(1)
    var result = fetchPro(url, {
        headers: {
            "content-type": "appliaction/json",
            ...options.header
        }
    }).then(res => res.json());
    return result
}
const post = (options) => {
    var result = fetchPro(options.url,{
        method:"post",
        body:qs.stringify(options.data),
        headers:{
            "content-type":"application/x-www-from-urlencoded",
            ...options
        }
    }).then(res=>res.json());
    return result;
}
export default {
    get,
    post
}
