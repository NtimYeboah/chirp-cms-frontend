/**
 * Created by ntimobedyeboah on 4/17/17.
 */
const axios = require('axios');

class Api {
    static save(url, data) {
        return axios.request({
            url: url,
            method: 'post',
            data: data
        })
        .then(res => res)
        .catch(err => err);
    }

    static getAll(url) {
        return axios.request({
                url: url,
                method: 'get'
            })
            .then(res => res)
            .catch(err => err);
    }

    static get(url) {
        return axios.request({
            url: url,
            method: 'get'
        })
        .then(res => res)
        .catch(err => err);
    }
}

export default Api;