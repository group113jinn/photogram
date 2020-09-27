import {postService} from '../../services/postService'


export function loadPosts() {
    return dispatch=>{
        postService.query().then(posts=>{
            dispatch({ type: 'SET_POSTS',posts })
        })
    }
}



export function savePost(post) {
    
    return async dispatch => {
        const _post = await postService.save(post);
        dispatch({ type: 'ADD_POST', _post })
      };
}

export function removePost(postId) {
    return async dispatch => {
        await postService.remove(postId)
        dispatch({ type: 'REMOVE_POST', postId })
      };
}

