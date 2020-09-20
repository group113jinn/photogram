import {postService} from '../../services/postService'


export function loadPosts() {
    return dispatch=>{
        postService.query().then(posts=>{
            dispatch({ type: 'SET_POSTS',posts })
        })
    }
}