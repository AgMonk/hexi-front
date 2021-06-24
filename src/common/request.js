import axios from 'axios';
import Vue from "vue";

export function transfer(config) {
    const instance = axios.create({
        baseURL: '/api',
        timeout: 6000,
    })
    instance.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err);
    })
    instance.interceptors.response.use(res => {
        let showMessage = res.config.params.showMessage;
        let data = res.data;
        if (data.code === 2000 && !showMessage) {
            Vue.prototype.$message({
                message: data.message,
                type: 'success'
            })
        }
        if (data.code !== 2000) {
            Vue.prototype.$message.error(data.message)
        }
        return res.data;
    }, err => {
        console.log(err);
    })
    return instance(config);
}

export function cloud(config) {
    const instance = axios.create({
        baseURL: '/cloud',
        timeout: 5000,
    })
    instance.interceptors.response.use(res => {
        let showMessage = res.config.params.showMessage;
        let data = res.data;
        if (data.code === 2000 && showMessage) {
            Vue.prototype.$message({
                message: data.message,
                type: 'success'
            })
        }
         if(data.code !== 2000){
            Vue.prototype.$message.error(data.message)
        }
        return res.data;
    }, err => {
        console.log(err);
    })

    return instance(config);
}
// getJson({type: 'Bill', name: 'statistics', version: '0',showMessage: '1'})
