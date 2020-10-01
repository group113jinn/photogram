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

    render() {
        return (
            <>
                <Header />
                <section className="profile-container">
                    <img src={profile_empty_img} alt="profile_picture" className="profile-pic" />
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
