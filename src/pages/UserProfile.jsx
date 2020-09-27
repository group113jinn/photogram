import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from '../cmps/Header'
import { PostAdd } from '../cmps/PostAdd'
import {loadPosts,savePost} from '../store/actions/postActions'



 class _UserProfile extends Component {
 state = {
    isModalShown: false,
 }

 
 componentDidMount() {
    this.props.loadPosts()
}

 showModal = () => {
    this.setState({ isModalShown: true })
    // const { posts } = this.props;
    // this.setState({posts: posts})
    // console.log(posts);
}

postAdd = (ev,post) => {
    ev.stopPropagation();
    this.props.savePost(post);
    this.setState({post: post})
    this.closeModal();

}

closeModal = () => {
    this.setState({ isModalShown: false })
}

    render() {
        return (
            <>
            <Header />
            <div className="add-post-container">
                <div className="add-navigation">
                <button className="add-button" onClick={this.showModal}>Add Post</button>
                <PostAdd isModalShown={this.state.isModalShown} closeModal={this.closeModal} postAdd={this.postAdd}/>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {

    return {
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = {
    loadPosts,
    savePost
    
    
   
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)
