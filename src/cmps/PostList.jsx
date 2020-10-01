import React from 'react'
import { PostPreview } from './PostPreview'

export function PostList(props) {
    const { posts,showModal,onLikePost} = props
    return (
        <>
            {
                posts.map(post => <PostPreview  showModal={showModal} post={post} onLikePost={onLikePost} key={post._id} />)
            }
        </>
    )
}