import React from 'react'
import { PostPreview } from './PostPreview'

export function PostList(props) {
    const { posts,showModal} = props
    return (
        <>
            {
                posts.map(post => <PostPreview  showModal={showModal} post={post} key={post._id}/>)
            }
        </>
    )
}