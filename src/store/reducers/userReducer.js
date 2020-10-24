
let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
    users: [],
    loggedInUser: localLoggedinUser,
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, loggedInUser: action.user };
        case 'SET_USERS':
            return { ...state, users: action.users };
        case 'USER_REMOVE':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            };
        default:
            return state
    }
}


