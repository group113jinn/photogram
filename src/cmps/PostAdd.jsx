import React from 'react'
import { v4 as uuidv4 } from 'uuid'



export function PostAdd(props) {
    const { closeModal, isModalShown,postAdd} = props;

    const post =
        
        {
            _id: uuidv4(),
            by: {
            username: "eugene_b",
                imgUrl: "https://ca.slack-edge.com/T0146T47BKR-U014ETN7XRU-1b360e211eb6-512"
            },
            imgUrls: [
                "https://hangzhou-xihunine-brooks-and-eighteen.hangzhouhotel.org/data/Photos/Big4/7293/729351/729351994.JPEG"
            ],
            alt: "By smile4travel.de",
            txt: "Tea Museum, Xi-Hu, Hangzhou",
            createdAt: 1600241052029,
            reactions: [
                {
                by: {
                        username: "eugene_b",
                        imgUrl: "http://image"
                    },
                    createdAt: 1600241052038,
                    type: "like/dislike/support"
                }
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
   

    return (
        <div>
            <div className={`modal-wrapper ${isModalShown ? '' : 'hide'}`} onClick={closeModal} >
               
                <ul className="add-modal-content " onClick={(ev) => ev.stopPropagation()}>
                <form onSubmit={(ev)=>postAdd(ev,post)}>
                        <li className="add-incard-header">
                            <div className="add-user-pic-name">
                                <img alt=" current-user" />
                            </div>
                        </li>
                        <li className="incard-img-preview"></li>

                        <li className="write-comment"><input type="text" placeholder="Write a description..."></input></li>

                        <li> Upload photo</li>
                        <li><button>Post</button></li>

                        <li onClick={closeModal}>Close</li>
                        </form>
                    </ul>
              
            </div>

            </div>
    )
}
