import React from 'react'
import { PostPreview } from './PostPreview'

export function PostList(props) {
    const { posts,showModal,onLikePost,onCommentInput,onSaveComment,onToggleComments} = props
    return (
        <>
            {
                posts.map(post => <PostPreview  showModal={showModal} post={post}  onToggleComments={onToggleComments} onLikePost={onLikePost} key={post._id} onSaveComment={onSaveComment} onCommentInput={onCommentInput}/>)
            }
        </>
    )
}