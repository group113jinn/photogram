import React from 'react'

export function PreviewMenu(props) {
    const {isModalShown,post,closeModal} = props
    return (
        <div>
             <div className={`modal-wrapper ${isModalShown ? '' : 'hide'}`} onClick={closeModal} >
                    <ul className="modal-content" onClick={(ev) => ev.stopPropagation()}>
                        <li>Unfollow</li>
                    <li onClick={(ev)=>this.onDelete(ev,post._id) }  >Delete</li>
                        <li onClick={closeModal}>Close</li>
                    </ul>
                </div >
        </div>
    )
}




































// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { loadPosts } from '../store/actions/postActions';

//  class _Modal extends Component {
    
//     state = {
//         isShown:false
//     }

//     componentDidMount() {
//         this.props.loadPosts()
//     }

//     closeModal = () => {
//         this.setState({ isShown: false })
//     }

//      showModal = () => {
//         this.setState({ isShown: true})
//     }
    

//     render() {
//         const { isShown } = this.state
//         return (
           
//             <div className={ `modal-wrapper ${isShown ? '' : 'hide'}` } onClick={ this.closeModal } >
//                 <ul className="modal-content" onClick={ (ev) => ev.stopPropagation() }>
//                     <li>Unfollow</li>
//                     <li>Delete</li>
//                     <li onClick={ this.closeModal }>Close</li>
//                 </ul>
//             </div >
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         posts: state.postReducer.posts
//     }
// }

// const mapDispatchToProps = {
//     loadPosts
// }

// export const Modal = connect(mapStateToProps, mapDispatchToProps)(_Modal)