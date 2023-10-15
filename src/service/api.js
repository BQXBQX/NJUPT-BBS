import axios from "axios";

const service = axios.create({
    baseURL:"http://127.0.0.1:4523/m1/2604789-0-default",
    timeout:5000,
})

//请求拦截器
service.interceptors.request.use(
    config =>{
        // console.log(config)
        return config;
    },error => {
        console.log(error);
        return Promise.reject(error);
    });

//相应拦截器
service.interceptors.response.use(response=>{
    // console.log(response)
    return response.data;
},error => {
    console.log(error.response.status);
    return Promise.reject(error);
})

//封装常用的方法
const api =  {
    get(url, params) {
        return service.get(url, {params});
    },
    post(url, data) {
        return service.post(url, data);
    },
    put(url, data) {
        return service.put(url, data);
    },
    delete(url) {
        return service.delete(url);
    }
};

export default api