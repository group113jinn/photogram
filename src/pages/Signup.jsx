import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../cmps/Header';
import { uploadImg } from '../services/cloudinaryService';


import {
  removeUser,
  signup
} from '../store/actions/userActions';

class _Signup extends Component {

  state = {
    didUserUploadImage: false,
    isUploading: false,
    signupCred: {
      email: '',
      password: '',
      username: '',
      imgUrl: ''

    }
  }



  signupHandleChange = ev => {
    const { name, value } = ev.target;

    if (name === 'imgUrl') {
      this.setState(() => ({
        isUploading: true,
      }))
      uploadImg(ev)
      .then((data) => {
        this.setState(prevState => ({
          isUploading: false,
          didUserUploadImage: true,
          signupCred: {
            ...prevState.signupCred,
            imgUrl: data.secure_url

          }
        }))
      })
    }
    else {
      this.setState(prevState => ({
        isUploading: false,
        signupCred: {
          ...prevState.signupCred,
          [name]: value
        }
      }));
    }
  };


  onSignup = async ev => {
    ev.preventDefault();
    const { email, password, username, imgUrl } = this.state.signupCred;
    if (!email || !password || !username) {
      return this.setState({ msg: 'All inputs are required!' });
    }
    const signupCreds = { email, password, username, imgUrl };
    console.log("signup info creds",signupCreds);
    this.props.signup(signupCreds);
    this.setState({
      signupCred: { email: '', password: '', username: '',imgUrl: '' }, didUserUploadImage: false,
      isUploading: false
    });
    setTimeout(() => {
      this.props.history.push('/feed')
    }, 400);

  };



  removeUser = userId => {
    this.props.removeUser(userId);
  };



  render() {
    const { didUserUploadImage, isUploading } = this.state;
    return (
      <>
        <Header />
        <div className="main-signup">
          <form onSubmit={this.onSignup}>
            <div className="signup-forms">
              <h1>Sign up</h1>
              <input
                type="email"
                name="email"
                value={this.state.signupCred.email}
                onChange={this.signupHandleChange}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={this.state.signupCred.password}
                onChange={this.signupHandleChange}
                placeholder="Password"
              />
              <input
                type="text"
                name="username"
                value={this.state.signupCred.username}
                onChange={this.signupHandleChange}
                placeholder="Username"
              />
              <input
                name="imgUrl"
                type="file"
                // value={this.state.signupCred.imgUrl}
                onChange={this.signupHandleChange} />


              <button type="submit" disabled={!didUserUploadImage}>{isUploading ? "Uploading..." : !didUserUploadImage ? "Upload" : "Save"}</button>

            </div>
          </form>
        </div>
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    users: state.userReducer.users,
    loggedInUser: state.userReducer.loggedInUser,
    isLoading: state.systemReducer.isLoading
  };
};
const mapDispatchToProps = {
  signup,
  removeUser
};

export const Signup = connect(mapStateToProps, mapDispatchToProps)(_Signup);
