import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/home_logo.png"
import { connect } from 'react-redux';

import {
  loadUsers,
  login,
  logout
} from '../store/actions/userActions';


 class _Home extends Component {
  state = {
    didUserUploadImage: false,
    isUploading: false,
    msg: '',
    loginCred: {
      email: '',
      password: ''
    }
  }

  loginHandleChange = ev => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      loginCred: {
        ...prevState.loginCred,
        [name]: value
      }
    }));
  };

  

  onLogin = async ev => {
    ev.preventDefault();
    const { email, password } = this.state.loginCred;
    if (!email || !password) {
      return this.setState({ msg: 'Please enter user/password' });
    }else{
    const userCreds = { email, password };
    this.props.login(userCreds);
    this.setState({ loginCred: { email: '', password: '' } });
    setTimeout(() => {
      this.props.history.push('/feed')
    }, 200);
    
    }
  };


  onGuestLogin = async ev => {
    ev.preventDefault();
    // const { email, password } = this.state.loginCred;
    const userCreds = { email:'guest@guest.com', password:'guest', username: 'guest',imgUrl: '' };
    this.props.login(userCreds);
    this.setState({ loginCred: { email: '', password: '', username: '',imgUrl: '' } });
    setTimeout(() => {
      this.props.history.push('/feed')
    }, 200);
    
    
  };


  render() {
    return (
      <section className="main-home">
        <section className="home-photo-signin">
          <article className="home-logo">
            <img src={Logo} alt="logo" />
          </article>
          <section className="sign-in-up">
            <article className="signin-container">
              <h1>
                Photogram
              </h1>
              <form onSubmit={this.onLogin}>
                <div>
                  <input
                    type="text"
                    name="email"
                    value={this.state.loginCred.email}
                    onChange={this.loginHandleChange}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={this.state.loginCred.password}
                    onChange={this.loginHandleChange}
                    placeholder="Password" />
                </div>
                <div>
                  <button className="login-button">Login</button>
                </div>
              </form>
              <div>
                <button className="guest-button" onClick={this.onGuestLogin}>Guest</button>
              </div>

            </article>
          
            <article className="signup-container">

              <div>
                <span>Don't have an account?</span>
                <Link to="/signup" ><button className="signup-button">Signup</button></Link>
              </div>

            </article>
        
          </section>
        </section>
      </section>
    )
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
  login,
  logout,
  loadUsers
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);