import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header } from '../cmps/Header'
import { PostAdd } from '../cmps/PostAdd'
import { loadPosts, savePost } from '../store/actions/postActions'
import profile_empty_img from '../assets/img/profile_empty.jpg'
import {logout} from '../store/actions/userActions'



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

    }


    closeModal = () => {
        this.setState({ isModalShown: false })

    }

    

    render() {
        const {loggedInUser} = this.props
        const profile_photo = !loggedInUser || !loggedInUser.imgUrl === "" || !loggedInUser.imgUrl ? profile_empty_img : loggedInUser.imgUrl
        // const profile_photo = profile_empty_img
        return (
            <>
                <Header />
                <section className="profile-container">
                    <img src={profile_photo} alt="profile_picture" className="profile-pic" />
                    <div className="add-post-container">

                        <div className="add-navigation">
                            <button className="add-button" onClick={this.showModal}>Add Post</button>
                            <Link to="/"><button className="add-button" onClick={this.props.logout}>Sign out</button></Link>
                            <PostAdd isModalShown={this.state.isModalShown} closeModal={this.closeModal} loggedInUser={loggedInUser}
                                 storeProps={this.props} />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts,
        loggedInUser: state.userReducer.loggedInUser
    
    }
}

const mapDispatchToProps = {
    loadPosts,
    savePost,
    logout


}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)
