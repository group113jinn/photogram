import axios from 'axios'
const BASE_URL = ' http://localhost:3010/post'
const resolveData = res => res.data

export const postService = {
    query,
    remove,
    save
}

function query(filterBy = {}) {
    var queryParams = new URLSearchParams()
    if (filterBy.txt) queryParams.set('q', filterBy.txt)
    return axios.get(`${BASE_URL}?${queryParams}`)
        .then(resolveData)
}

function remove(postId) {
    return axios.delete(`${BASE_URL}/${postId}`)
}

function save(post) {
    return axios.post(BASE_URL, post).then(resolveData)
  
}


