import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import profile_empty_img from '../assets/img/profile_empty.jpg'






function _Header({onSetFilter,loggedInUser}) {

    const profile_photo = !loggedInUser || !loggedInUser.imgUrl === "" || !loggedInUser.imgUrl ? profile_empty_img : loggedInUser.imgUrl
    // const profile_photo = profile_empty_img
    return (
        <section className="main-header">
            <Link to="/feed"><div className="logo">Photogram</div></Link>
            <section className="header-search-section">
                <span role="img" aria-label="magnifying-glass" className="magnifier"> &#x1F50D;&#xFE0E;</span>
                <input type="search" onChange={(ev) => onSetFilter(ev)} placeholder="Search" className="search-box" />
            </section>
            <ul>
                <li><Link to="/feed"><svg fillRule="evenodd" className="home _passive" height="22" fill="#262626" viewBox="0 0 48 48" width="22"> <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path> </svg></Link></li>
                <li><Link to="/share"><svg fill="#262626" height="22" viewBox="0 0 48 48" width="22" className="inbox"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg></Link></li>
                <li><Link to="/explore"><svg height="22" viewBox="0 0 48 48" width="22" className="compass"><path d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z"></path></svg></Link></li>
                <li><Link to="/liked"><svg height="22" viewBox="0 0 48 48" width="22"><path d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" ></path></svg></Link></li>
                <li profile_photo={profile_photo}><Link to="/user/profile"><img src={profile_photo} className="navbar-profile-pic" alt="" /></Link></li>
            </ul>
        </section >

    )
}


const mapStateToProps = state => {
    return {
        loggedInUser: state.userReducer.loggedInUser
    }
}



export const Header = connect(mapStateToProps)(_Header)