import React, { Component } from 'react'
import { Header } from '../cmps/Header'
import { PostAdd } from '../cmps/PostAdd'


export  class UserProfile extends Component {
 state = {
    isModalShown: false,
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
            <div className="add-post-container">
                <div className="add-navigation">
                <button onClick={this.showModal}>Add Post</button>
                <PostAdd isModalShown={this.state.isModalShown} closeModal={this.closeModal}/>
                </div>
            </div>
            </>
        )
    }
}
