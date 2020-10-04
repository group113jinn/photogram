import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts, removePost, savePost } from '../store/actions/postActions';
import { PostList } from '../cmps/PostList'
import { Header } from '../cmps/Header';
import { PreviewMenu } from '../cmps/PreviewMenu';




class _PhotoGramApp extends Component {

    state = {
        isModalShown: false,
        post: {
            isCommentsShown: false
        }
    }

    componentDidMount() {
        this.props.loadPosts()
    }


    onToggleComments = (ev,post) => {
        ev.preventDefault()
        ev.stopPropagation();
        if (this.state.post.isCommentsShown) { // change user
          const newPost = {...post,isCommentsShown:false}
        this.props.savePost(newPost)
        this.props.loadPosts();
        this.setState({post:newPost})
        this.props.loadPosts();
        } else {
            const newPost = {...post,isCommentsShown:true}
            this.props.savePost(newPost)
            this.props.loadPosts();
            this.setState({post:newPost})
            this.props.loadPosts();
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

    onLikePost = (ev, post) => {
        ev.preventDefault()
        ev.stopPropagation();
        let rest = post.reactions;
        if (post.reactions.some(reaction => reaction.by.username === "eugene_b")) { // change user
            const newReactions = (post.reactions.filter(reaction => reaction.by.username !== "eugene_b"));
          const newPost = {...post,reactions:newReactions}
               this.props.savePost(newPost)
               this.props.loadPosts();
        } else {
            this.props.savePost({ ...post, reactions: [...rest, { by: { username: "eugene_b" } }] });
            this.props.loadPosts();
        }
       this.props.loadPosts();
    }

 
   

    onCommentInput = (ev,post,enablePostButton) =>{
        ev.preventDefault()
        ev.stopPropagation()
        enablePostButton()
        const value = ev.target.value
        this.setState({post:{...post,isCommentsShown:true,comments:[...post.comments,{by:{username: "eugene_b"},txt:value}]}})  //username later  chhange
        
      
      
   
    }

    onSaveComment = (ev,disablePostButton) =>{
        ev.preventDefault ();
        this.props.savePost(this.state.post);
        this.props.loadPosts();  
        this.props.loadPosts() ; 
        disablePostButton();
    
        ev.target.reset();
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
                    <PostList showModal={this.showModal} onLikePost={this.onLikePost} posts={posts}  onToggleComments={this.onToggleComments} onSaveComment={this.onSaveComment} onCommentInput={this.onCommentInput} />
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
