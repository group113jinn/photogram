import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts, removePost, savePost, setFilter } from '../store/actions/postActions';
import { PostList } from '../cmps/PostList'
import { Header } from '../cmps/Header';
import { PreviewMenu } from '../cmps/PreviewMenu';


class _PhotoGramApp extends Component {

    state = {
        isModalShown: false,
        post: {
            isCommentsShown: false
        },
        filterBy: {
            txt: ''
        }
    }

    componentDidMount() {
        this.props.loadPosts()
    }

    // onSetFilter = (ev) => {
    //     const value = ev.target.value

    //     this.setState({ ...this.state, filterBy: { txt: value } })
    //     if (value !== '') { this.props.setFilter(value) }
    //     else {
    //         this.props.setFilter(this.state.filterBy.txt)
    //         this.props.loadPosts()
    //     }
    // }

   onSetFilter = ({ target }) => {
        var value = target.value 
        var filterBy = { ...this.state.filterBy, txt: value };
        this.setState({ filterBy }, () => {
            console.log(this.state.filterBy);
            this.props.loadPosts({ ...this.state.filterBy })
        });
    }




    onToggleComments = async (ev, post) => {
        ev.preventDefault()
        ev.stopPropagation();
        if (this.state.post.isCommentsShown) {
            const newPost = { ...post, isCommentsShown: false }
            await this.props.savePost(newPost)
            this.setState({ post: newPost })
        } else {
            const newPost = { ...post, isCommentsShown: true }
            await this.props.savePost(newPost)
            this.setState({ post: newPost })
        }
        this.props.loadPosts();
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

    onLikePost = async (ev, post) => {
        ev.preventDefault()
        ev.stopPropagation();
        let rest = post.reactions;
        if (post.reactions.some(reaction => reaction.by.username === "eugene_b")) { // change user
            const newReactions = (post.reactions.filter(reaction => reaction.by.username !== "eugene_b"));
            const newPost = { ...post, reactions: newReactions }
            await this.props.savePost(newPost)
        } else {
            await this.props.savePost({ ...post, reactions: [...rest, { by: { username: "eugene_b" } }] });
        }
        this.props.loadPosts();
    }

    onCommentInput = (ev, post, enablePostButton) => {
        ev.preventDefault()
        ev.stopPropagation()
        enablePostButton()
        const value = ev.target.value
        this.setState({ post: { ...post, isCommentsShown: true, comments: [...post.comments, { by: { username: "eugene_b" }, txt: value }] } })  //username later  chhange
    }

    onSaveComment = async (ev, disablePostButton) => {
        ev.preventDefault();
        await this.props.savePost(this.state.post);
        this.props.loadPosts();
        disablePostButton();
    }

    render() {

        const { post } = this.state

        const { isModalShown } = this.state
        const { posts } = this.props
        if (!posts) return <div></div>
        return (
            <>
                <Header onSetFilter={this.onSetFilter} />
                <div className="main-container">
                    <PostList showModal={this.showModal} onLikePost={this.onLikePost} posts={posts} onToggleComments={this.onToggleComments}
                        onSaveComment={this.onSaveComment} onCommentInput={this.onCommentInput} />
                </div>
                <PreviewMenu isModalShown={isModalShown} post={post} closeModal={this.closeModal} onDelete={this.onDelete} />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts,
        // filterBy: state.PostReducer.filterBy
    }
}

const mapDispatchToProps = {
    loadPosts,
    removePost,
    savePost,
    setFilter
}

export const PhotoGramApp = connect(mapStateToProps, mapDispatchToProps)(_PhotoGramApp)
