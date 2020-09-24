import React, {Component} from 'react';
export class Modal extends Component {
    state = {
        isShown: true
    }
    closeModal = () => {
        this.setState({ isShown: false })
    }

     showModal = () => {
        this.setState({ isShown: true})
    }


    render() {
        const { isShown } = this.state

        return (
            <div className={ `modal-wrapper ${isShown ? '' : 'hide'}` } onClick={ this.closeModal } >
                <ul className="modal-content" onClick={ (ev) => ev.stopPropagation() }>
                    <li>Unfollow</li>
                    <li>Like</li>
                    <li>Delete</li>
                    <li onClick={ this.closeModal }>Close</li>
                    { this.props.children }
                </ul>
            </div >
        )
    }
}

