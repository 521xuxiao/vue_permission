import axios from 'axios'
// import store from "@store/index.js"
import {Message} from "element-ui";
const http = {};

var instance = axios.create({
    timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(
    function(config) {
        // 请求添加token
        // if(store.state.UserToken) {
        //     config.headers.Authorization = store.state.UserToken;
        // }
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
)



// 响应拦截

instance.interceptors.response.use(
    response => {
        return response.data
    },
    err => {
        if(err && err.response) {
            switch(err.response.status) {
                case 400:
                    err.message = "请求出错";
                    break;
                case 401:
                    Message.warning({
                        message: "授权失败， 请重新登录"
                    })
                    // store.commit('LOGIN_OUT')
                    // setTimeout(()=>{
                    //     window.location.reload();
                    // }, 1000)
                    break;
                case 403:
                    err.message = "拒绝访问"
                    break;
                case 404:
                    err.message = "请求错误， 未找到该资源";
                    break;
                case 500:
                    err.message = "服务端出错";
                    break;
            }
        }else {
            err.message = '链接服务器失败';
        }
        Message.error({
            message: err.message
        })
        return Promise.reject(err.message);
    }
)

http.get = function(url, options) {
    return new Promise((resolve, reject)=>{
        instance.get(url, options).then((res)=>{
            if(res.code == 200) {
                resolve(res.data)
            }else{
                Message.error({
                    message: res.message
                })
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
}

http.post = function(url, data, options) {
    return new Promise((resolve, reject)=>{
        instance.post(url, data, options).then((res)=>{
            if(res.code == 200) {
                resolve(res.data);
            }else{
                Message.error({
                    message: res.message
                })
                reject(res.message);
            }
        }).catch((err)=>{
            console.log(err)
        })
    })
}


export default http;
