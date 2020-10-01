import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts, removePost, savePost } from '../store/actions/postActions';
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
        this.setState({ post: null });
        this.closeModal();

    }

    onLikePost = (ev, post) => {
        ev.preventDefault()
        ev.stopPropagation();
        let rest = post.reactions;
        if (post.reactions.some(reaction => reaction.by.username === "eugene_b")) { // change user
            const newReactions = (post.reactions.filter(reaction => reaction.by.username !== "eugene_b"));
          const newPost = {...post,reactions:newReactions}
               this.props.savePost(newPost)

        } else {
            this.props.savePost({ ...post, reactions: [...rest, { by: { username: "eugene_b" } }] });
     
        }
       this.props.loadPosts();

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
                    <PostList showModal={this.showModal} onLikePost={this.onLikePost} posts={posts} />
                </div>
                <PreviewMenu isModalShown={isModalShown} post={post} closeModal={this.closeModal} onDelete={this.onDelete} />
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
    removePost,
    savePost
}

export const PhotoGramApp = connect(mapStateToProps, mapDispatchToProps)(_PhotoGramApp)
