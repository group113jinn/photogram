import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from '../cmps/Header'
import { PostAdd } from '../cmps/PostAdd'
import {loadPosts} from '../store/actions/postActions'



 class _UserProfile extends Component {
 state = {
    isModalShown: false,
   post: null
 }

 
 componentDidMount() {
    this.props.loadPosts()
}

 showModal = () => {
    this.setState({ isModalShown: true })
    const { posts } = this.props
    console.log(posts);
}

addPost = () => {

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
                <button onClick={this.showModal}>Add Post</button>
                <PostAdd isModalShown={this.state.isModalShown} closeModal={this.closeModal} />
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
    
   
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)
