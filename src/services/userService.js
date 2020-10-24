import httpService from './httpService'
const BASE_URL_AUTH = 'api/auth'
const BASE_URL_USER = 'api/users'



export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update
}

async function getUsers() {
   const res =  await httpService.get('users')
   console.log("users",res);
    return res
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
    const user = await httpService.post('auth/login', userCred)
    return _handleLogin(user)
}
 
async function signup(userCred) {
    console.log("userService signup usercersd",userCred);
    const user = await httpService.post('auth/signup', userCred)
    return _handleLogin(user)
}
async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}
function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}