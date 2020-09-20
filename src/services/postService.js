import axios from 'axios'
const BASE_URL = ' http://localhost:3010/post'
const resolveData = res => res.data

export const postService = {
    query,
}

function query(filterBy = {}) {
    var queryParams = new URLSearchParams()
    if (filterBy.txt) queryParams.set('q', filterBy.txt)
    return axios.get(`${BASE_URL}?${queryParams}`)
        .then(resolveData)
}