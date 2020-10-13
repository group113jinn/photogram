import Axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3010/'


var axios = Axios.create({
    withCredentials: false
});

export default {
    get(endpoint, data) {
        console.log('getdata-', data);
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        console.log('postdata-', data);
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        console.log('putdata-', data);
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        console.log('deletedata-', data);
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            window.location.assign('/#/');
        }
        throw err;
    }
}