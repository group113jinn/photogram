import httpService from "./httpService"

export const postService = {
    query,
    remove,
    save,
    getById
}


async function query(filterBy = {}) {
    var queryParams = new URLSearchParams()
    if (filterBy.txt) queryParams.set('q', filterBy.txt)
    return httpService.get(`${'posts'}?${queryParams}`)
}


 function getById(postId) {
    return  httpService.get(`posts/${postId}`)
}
function remove(postId) {
    return httpService.delete(`posts/${postId}`)
}

function save(post) {
    if (post._id) {
        return httpService.put(`posts/${post._id}`, post)
    } else {
        return httpService.post('posts', post)
    }
}