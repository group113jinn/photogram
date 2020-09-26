import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts, removePost } from '../store/actions/postActions';
import { PostList } from '../cmps/PostList'
import { Header } from '../cmps/Header';
import { PreviewMenu } from '../cmps/PreviewMenu';



class _PhotoGramApp extends Component {

    state = {
        isModalShown: false,
        post: null
    }

    componentDidMount() {
        this.props.loadPosts()
    }

    closeModal = () => {
        this.setState({ isModalShown: false })
    }

    showModal = (post) => {
        this.setState({ isModalShown: true, post: post })
    }

    onDelete = (ev, postId) => {
        ev.stopPropagation();
        this.props.removePost(postId);
        this.closeModal();

    }

    render() {
        const { post } = this.state
        const { isModalShown } = this.state
        const { posts } = this.props
        if (!posts) return <div></div>
        return (
            <>
                <Header />
                <div className="main-container">
                    <PostList showModal={this.showModal} posts={posts} />
                </div>
                <PreviewMenu isModalShown={isModalShown} post={post} closeModal={this.closeModal} />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = {
    loadPosts,
    removePost
}

export const PhotoGramApp = connect(mapStateToProps, mapDispatchToProps)(_PhotoGramApp)
