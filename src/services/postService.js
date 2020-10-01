import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid'
const BASE_URL = ' http://localhost:3010/post'
const resolveData = res => res.data


export const postService = {
    query,
    remove,
    save,
   
}

function query() {
// function query(filterBy = {}) {
//     var queryParams = new URLSearchParams()
//     if (filterBy.txt) queryParams.set('q', filterBy.txt)
    // return axios.get(`${BASE_URL}?${queryParams}`)
    return axios.get(`${BASE_URL}`)
        .then(resolveData)
}

function remove(postId) {
    return axios.delete(`${BASE_URL}/${postId}`)
}

function save(post) {
    // console.log("post",post);
    //   return axios.post(BASE_URL, post).then(resolveData)
      
    if (post._id) {
        return axios.put(`${BASE_URL}/${post._id}`, post)
    } else {
        return axios.post(BASE_URL, post).then(resolveData)
    }
}




