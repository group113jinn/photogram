import React from 'react'
import { PostPreview } from './PostPreview'

export function PostList(props) {
    const { posts,showModal,onLikePost,onCommentInput,onSaveComment,onToggleComments,loggedInUser} = props
    return (
        <>
            {
                posts.map(post => <PostPreview  loggedInUser={loggedInUser} showModal={showModal} post={post}  onToggleComments={onToggleComments} onLikePost={onLikePost} key={post._id} onSaveComment={onSaveComment} onCommentInput={onCommentInput}/>)
            }
        </>
    )
}