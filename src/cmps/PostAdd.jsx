import React from 'react'

export function PostAdd(props) {
    const { closeModal, isModalShown } = props;

    return (
        <div>
            <div className={`modal-wrapper ${isModalShown ? '' : 'hide'}`} onClick={closeModal} >
                <ul className="modal-content " onClick={(ev) => ev.stopPropagation()}>

                        <li className="incard-header">
                            <div className="user-pic-name">
                                <img alt="user" />
                            </div>


                        </li>
                        <li className="incard-img-preview"></li>

                        <li className="write-comment"><input type="text" placeholder="Write a description..."></input></li>

                        <li>Upload photo</li>

                        <li onClick={closeModal}>Close</li>
                    </ul>
            </div>

            </div>
    )
}
