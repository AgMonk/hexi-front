import axios from 'axios';
import Vue from "vue";

export function transfer(config) {
    let showMessage;
    const instance = axios.create({
        baseURL: '/api',
        timeout: 5000,
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Cache-Control": "max-age=0",
        },
    })
    instance.interceptors.request.use(config => {
        if (config.data) {
            showMessage = config.data.showMessage;
        } else {
            showMessage = config.params.showMessage;
        }
        return config;
    }, err => {
        console.log(err);
    })
    instance.interceptors.response.use(res => {
        // console.log(res)
        let data = res.data;
        if (data.code === 2000 && !showMessage) {
            Vue.prototype.$message({
                message: data.message,
                type: 'success'
            })
        }
        if (data.code !== 2000) {
            Vue.prototype.$message.error({
                message: data.message
            })
        }
        return res.data;
    }, err => {
        console.log(err);
        throw err;
    })
    return instance(config);
}

export function cloud(config) {
    const instance = axios.create({
        baseURL: '/cloud',
        timeout: 5000,
    })
    instance.interceptors.response.use(res => {
        let data = res.data;
        if (data.code === 2000) {
            Vue.prototype.$message({
                message: data.message,
                type: 'success'
            })
        } else {
            Vue.prototype.$message.error({
                message: data.message
            })
        }
        return res.data;
    }, err => {
        console.log(err);
    })

    return instance(config);
}