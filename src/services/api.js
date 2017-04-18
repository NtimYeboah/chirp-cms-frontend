/**
 * Created by ntimobedyeboah on 4/17/17.
 */
const axios = require('axios');

class Api {
    static save(url, data) {
        return axios.post(url, data)
            .then(res => res)
            .catch(err => err);
    }

    static getAll(url) {
        return axios.get(url)
            .then(res => res)
            .catch(err => err);
    }
}

module.exports = Api;