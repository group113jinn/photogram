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
        case 'REMOVE_POST':
            return {...state, posts: state.posts.filter(post => post._id !== action.postId) }
       
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action._post]
            }

        default:
            return state
    }
}