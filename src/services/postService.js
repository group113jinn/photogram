import axios from 'axios'
const BASE_URL = ' http://localhost:3010/post'
const resolveData = res => res.data


export const postService = {
    query,
    remove,
    save,

}


function query(filterBy = {}) {
    var queryParams = new URLSearchParams()
    if (filterBy.txt) queryParams.set('q', filterBy.txt)
    return axios.get(`${BASE_URL}?${queryParams}`)
    .then(resolveData)
}


// function query(filterBy) {
//     let query = '';
//     if (filterBy) {
//         query = '?' + Object.keys(filterBy).map(key => key + '=' + filterBy[key]).join('&');
//         query = filterBy.txt
//     }
//     console.log('query', query);
//     return axios.get(`${BASE_URL}${query}`).then(res => {
//         console.log(res.data);
//         return res.data
//     });
// }


function remove(postId) {
    return axios.delete(`${BASE_URL}/${postId}`)
}

function save(post) {
    if (post._id) {
        return axios.put(`${BASE_URL}/${post._id}`, post)
    } else {
        return axios.post(BASE_URL, post).then(resolveData)
    }
}