
import React, { Component } from 'react'
import { uploadImg } from '../services/cloudinary-service'




export class PostAdd extends Component {
    state = {
        didUserUploadImage: false,
        isUploading: false,
        post:
        {
            _id: "",
            by: {
                username: "eugene_b",
                imgUrl: "https://ca.slack-edge.com/T0146T47BKR-U014ETN7XRU-1b360e211eb6-512"
            },
            imgUrls: [

            ],
            alt: "",
            txt: "",
            createdAt: 1600241052029,
            reactions: [

            ],
            comments: [
                {
                    by: {
                        username: "eugene_b",
                        imgUrl: "http://image"
                    },
                    createdAt: 1600241052029,
                    txt: "cool"
                }
            ]
        }

    }


    postAdd = (ev, post) => {
        ev.preventDefault();
        ev.stopPropagation();
        // if (post.imgUrls.length === 0) {
        //     console.log("Loading...")
        // } else {
        console.log("saving");
        this.props.storeProps.savePost(post);
        this.props.closeModal();
        // }
    }


    onInputChange = (ev) => {
        ev.preventDefault();
        this.setState(prevState => ({
            isUploading: true,
            post: {
                ...prevState.post,
            }
        }))

        const value = ev.target.value
        if (ev.target.name === 'imgUrls') {
            uploadImg(ev).then((data) => {
                this.setState(prevState => ({
                    isUploading: false,
                    didUserUploadImage: true, post: {
                        ...prevState.post, imgUrls:
                            [data.secure_url, ...prevState.post.imgUrls]
                    }
                }))


                console.log("uploaded post", this.state.post)
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
        const { post, didUserUploadImage, isUploading } = this.state;
        return (

            <div>
                <div className={`modal-wrapper ${isModalShown ? '' : 'hide'}`} onClick={closeModal} >

                    <ul className="add-modal-content " onClick={(ev) => ev.stopPropagation()}>
                        <form onSubmit={(ev) => this.postAdd(ev, post)}>
                            <li className="incard-header">
                                <div className="user-pic-name">
                                    <img src={post.by.imgUrl} alt="user" />
                                    <div>{post.by.username}</div>
                                </div>
                            </li>
                            <li className="incard-img-preview"></li>

                            <li className="write-comment">
                                <input name="txt" type="text" placeholder="Write a description..." onChange={this.onInputChange} ></input>
                            </li>

                            <li> <input name="imgUrls" type="file" id="photo-input" onChange={this.onInputChange} />
                            </li>
                            <li>
                                <button type="submit" disabled={!didUserUploadImage}>{isUploading?"Uploading...":!didUserUploadImage ? "" :"Post"}</button>
                            </li>

                            <li onClick={closeModal}>Close</li>
                        </form>
                    </ul>

                </div>

            </div>
        )
    }
}
