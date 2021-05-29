import axios from 'axios';

export function transfer(config) {
    const instance = axios.create({
        baseURL: '/api',
        timeout: 6000,
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    return instance(config);
}

// request.interceptors.response.use(function (response) {
//     let data = response.data;
//     if (data.code === 2000) {
//         return data.data;
//     }else{
//         Vue.prototype.$message.error(data.message);
//         throw data.data
//     }
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });