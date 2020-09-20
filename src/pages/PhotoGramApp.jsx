import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../store/actions/postActions';
import {PostList} from '../cmps/PostList.jsx' 




class _PhotoGramApp extends Component {

    componentDidMount(){
        this.props.loadPosts()
    }
    render() {
        const {posts} = this.props
        if(!posts) return <div></div>
        return (
            <div >
                <PostList posts={posts} />
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return {
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = {
    loadPosts
}

export const PhotoGramApp = connect(mapStateToProps,mapDispatchToProps)(_PhotoGramApp)
