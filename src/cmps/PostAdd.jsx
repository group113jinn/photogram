import React from 'react'
// import { v4 as uuidv4 } from 'uuid'



export function PostAdd(props) {
    const { closeModal, isModalShown} = props;
   

    return (
        <div>
            <div className={`modal-wrapper ${isModalShown ? '' : 'hide'}`} onClick={closeModal} >
                <ul className="add-modal-content " onClick={(ev) => ev.stopPropagation()}>

                        <li className="add-incard-header">
                            <div className="add-user-pic-name">
                                <img alt=" current-user" />
                            </div>


                        </li>
                        <li className="incard-img-preview"></li>

                        <li className="write-comment"><input type="text" placeholder="Write a description..."></input></li>

                        <li>Upload photo</li>
                        <li onClick={()=>console.log("gugu")}>Post</li>

                        <li onClick={closeModal}>Close</li>
                    </ul>
            </div>

            </div>
    )
}
