import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'
import profile_empty_img from '../assets/img/profile_empty.jpg'



export function PostPreview({ post, showModal, onLikePost, onCommentInput, onSaveComment, onToggleComments, loggedInUser }) {
  const commentLength = post.comments.length === 1 ? "Show all " + post.comments.length + " comment" : "Show all " + post.comments.length + " comments";
  const unlikedIcon = <svg aria-label="Unlike" fill="#ed4956" height="22" viewBox="0 0 48 48" width="22"><path d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z" ></path></svg>
  const likedIcon = <svg aria-label="Like" height="22" viewBox="0 0 48 48" width="22"><path d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" ></path></svg>
  const isCurrUserLiked = post.reactions.some(reaction => reaction.by.username === loggedInUser.username)
  // const isCurrUserLiked = ''
  const userComments = post.comments.map(userComment => {
    return (
      <li key={uuidv4()} className={` ${post.isCommentsShown ? '' : 'hide'}`}>
        <span>{userComment.by.username}</span> {userComment.txt}
      </li>)
  })

  const buttonRef = useRef();
  const inputRef = useRef();

  const enablePostButton = () => {
    buttonRef.current.disabled = false;
  }
  const disablePostButton = () => {
    buttonRef.current.disabled = true;
  }


  return (
    <ul className="post-preiew-card">
      <li className="incard-header">
        <div className="user-pic-name">
          <img src={post.by.imgUrl?post.by.imgUrl:profile_empty_img} alt="" />
          <div>{post.by.username}</div>
        </div>
        <div className="post-menu">
          <button onClick={() => showModal(post)}>
            &#8942;
          </button>
        </div>
      </li>
      <li className="incard-img-preview">
        <img src={post.imgUrls[0]} alt={post.alt} />
      </li>
      <ul className="shortcuts-bar">
        <li>
          <ul>
            <li onClick={(ev) => onLikePost(ev, post)}>{isCurrUserLiked ? unlikedIcon : likedIcon}</li>
            <li><svg aria-label="Comment" fill="#262626" height="22" viewBox="0 0 48 48" width="22" ><path d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" ></path></svg></li>
            <li><svg aria-label="Share Post" fill="#262626" height="22" viewBox="0 0 48 48" width="22" ><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><svg aria-label="Save" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg></li>
          </ul>
        </li>
      </ul>
      <ul className="post-description">
        <li>
          <span> {post.reactions.length}{post.reactions.length === 1 ? " like" : " likes"}</span>
        </li>
        <li>
          <span> {post.txt ? post.by.username : ""}</span> {post.txt}
        </li>
        <li className="show-comments " onClick={(ev) => onToggleComments(ev, post)}>
          {!post.isCommentsShown ? commentLength : ' Hide comments'}
        </li>
        <li>
          <ul className="comments-box">
            {userComments}
          </ul>
        </li>
      </ul>
      <form onSubmit={(ev) => {
        onSaveComment(ev, disablePostButton)
        inputRef.current.value = ''
      }
      }>
        <li className="write-comment"><input name="txt" type="text" onChange={(ev) => onCommentInput(ev, post, enablePostButton)}
          placeholder="Write a comment..." ref={inputRef}></input><button type="submit" ref={buttonRef} disabled>Post</button></li>
      </form>

    </ul>
  )
}


// const mapStateToProps = state => {
//   return {
//     loggedInUser: state.userReducer.loggedInUser
//   }
// }



// export const PostPreview = connect(mapStateToProps)(_PostPreview)
