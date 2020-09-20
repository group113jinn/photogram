const initialState = {
    posts: []
}

export function postReducer(state = initialState, action) {
switch (action.type) {
    case 'SET_POSTS':
     return {
         ...state,
         posts: action.posts
     }
    default:
        return state 
}
}