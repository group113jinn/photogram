import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header } from '../cmps/Header'
import { PostAdd } from '../cmps/PostAdd'
import { loadPosts, savePost } from '../store/actions/postActions'
import profile_empty_img from '../assets/img/profile_empty.jpg'



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

    setProfilePhoto = () => {//temporary until userservice
        const profile_photo = "https://ca.slack-edge.com/T0146T47BKR-U014ETN7XRU-1b360e211eb6-512"
    return profile_photo?profile_photo:profile_empty_img
    }

    render() {
        return (
            <>
                <Header setProfilePhoto={this.setProfilePhoto}/>
                <section className="profile-container">
                    <img src={this.setProfilePhoto()} alt="profile_picture" className="profile-pic" />
                    <div className="add-post-container">

                        <div className="add-navigation">
                            <button className="add-button" onClick={this.showModal}>Add Post</button>
                            <Link to="/"><button className="add-button">Sign out</button></Link>
                            <PostAdd isModalShown={this.state.isModalShown} closeModal={this.closeModal}
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
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = {
    loadPosts,
    savePost

}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)
