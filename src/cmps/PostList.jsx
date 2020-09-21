import React from 'react'
import { PostPreview } from './PostPreview'

export function PostList({ posts }) {
    return (
        <>
            {
                posts.map(post => <PostPreview post={post} key={post._id} />)
            }
        </>
    )
}