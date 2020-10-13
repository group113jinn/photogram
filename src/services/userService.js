import httpService from './httpService'
// import axios from 'axios'
// const BASE_URL = ' http://localhost:3010/user'
// const resolveData = res => res.data

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update
}

function getUsers() {
    return httpService.get('user')
    
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}
function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

function update(user) {
    console.log(user);
    return httpService.put(`user/${user._id}`, user)
}

async function login(userCred) {
    const user = await httpService.post('users', userCred)
    return _handleLogin(user)
}
async function signup(userCred) {
    const user = await httpService.post('users', userCred)
    return _handleLogin(user)
}
async function logout() {
    
    await httpService.post('users');
    sessionStorage.clear();
}
function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}