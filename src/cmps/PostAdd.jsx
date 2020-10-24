
import React, { Component } from 'react'
import { uploadImg } from '../services/cloudinaryService'
import profile_empty_img from '../assets/img/profile_empty.jpg'





export class PostAdd extends Component {
    state = {
        didUserUploadImage: false,
        isUploading: false,
        post:
        {
            
            by: {
                username: this.props.loggedInUser.username,
                imgUrl: this.props.loggedInUser.imgUrl
            },
            imgUrls: [

            ],
            alt: "",
            txt: "",
            createdAt: 1600241052029,
            reactions: [],
            comments: [],
            isCommentsShown: false
        }

    }


    postAdd = (ev, post) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.props.storeProps.savePost(post);
        this.props.closeModal();
    }

    onInputChange = (ev) => {
        ev.preventDefault();
        this.setState(() => ({
            isUploading: true,
        }))

        const value = ev.target.value
        if (ev.target.name === 'imgUrls') {
            uploadImg(ev).then((data) => {
                this.setState(prevState => ({
                    isUploading: false,
                    didUserUploadImage: true,
                    post: {
                        ...prevState.post, imgUrls:
                            [data.secure_url, ...prevState.post.imgUrls]
                    }
                }))
            })
        } else if (ev.target.name === "txt") {
            this.setState(prevState => ({
                isUploading: false,
                post: {
                    ...prevState.post, txt: value
                }
            }))

        }


    }


    render() {
        const { closeModal, isModalShown } = this.props;
        const loggedInUser = this.props.loggedInUser
        const { post, didUserUploadImage, isUploading } = this.state;
        const profile_photo = !loggedInUser || !loggedInUser.imgUrl === "" || !loggedInUser.imgUrl ? profile_empty_img : loggedInUser.imgUrl
        return (
            <div>
                <div className={`modal-wrapper ${isModalShown ? '' : 'hide'}`} onClick={closeModal} >
                    <ul className="add-modal-content " onClick={(ev) => ev.stopPropagation()}>
                        <form onSubmit={(ev) => this.postAdd(ev, post)}>
                            <li className="incard-header">
                                <div className="user-pic-name">
                                    <img src={profile_photo} alt="" />
                                    <div>{post.by.username}</div>
                                </div>
                            </li>
                            <li className="incard-img-preview">
                                <img src={post.imgUrls[0]} alt="" />
                            </li>
                            <li className="write-comment">
                                <input name="txt" type="text" placeholder="Write a description..." onChange={this.onInputChange} ></input>
                            </li>
                            <li> <input name="imgUrls" type="file"  onChange={this.onInputChange} />
                            </li>
                            <li>
                                <button type="submit" disabled={!didUserUploadImage}>{isUploading ? "Uploading..." : !didUserUploadImage ? "" : "Post"}</button>
                            </li>
                            <li onClick={closeModal}>Close</li>
                        </form>
                    </ul>

                </div>

            </div>
        )
    }
}
