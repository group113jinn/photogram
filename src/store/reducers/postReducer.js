const initialState = {
    posts: [],
}


export function postReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'REMOVE_POST':
            return {...state, posts: state.posts.filter(post => post._id !== action.postId) }

        case 'EDIT_POST':
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (action._post._id === post._id) return action._post
                    return post;
                })
            }

        case 'ADD_POST':
            return {
                ...state,
                posts: [action._post, ...state.posts]
            }

        default:
            return state
    }
}