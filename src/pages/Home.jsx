import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/home_logo.png"
import { connect } from 'react-redux';

import {
  loadUsers,
  removeUser,
  login,
  logout,
  signup
} from '../store/actions/userActions';

export class _Home extends Component {
  state = {
    msg: '',
    loginCred: {
      email: '',
      password: ''
    },
    signupCred: {
      email: '',
      password: '',
      username: ''
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

  signupHandleChange = ev => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      signupCred: {
        ...prevState.signupCred,
        [name]: value
      }
    }));
  };

  doLogin = async ev => {
    ev.preventDefault();
    const { email, password } = this.state.loginCred;
    if (!email || !password) {
      return this.setState({ msg: 'Please enter user/password' });
    }
    const userCreds = { email, password };
    this.props.login(userCreds);
    this.setState({ loginCred: { email: '', password: '' } });
    this.props.history.push('/post')
  };

  doSignup = async ev => {
    ev.preventDefault();
    // const { email, password, username } = this.state.signupCred;
    // if (!email || !password || !username) {
    //   return this.setState({ msg: 'All inputs are required!' });
    // }
    // const signupCreds = { email, password, username };
    // this.props.signup(signupCreds);
    // this.setState({ signupCred: { email: '', password: '', username: '' } });
    // this.props.history.push('/toy')
  };

  removeUser = userId => {
    this.props.removeUser(userId);
  };








  render() {
    console.log(this.state);
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
              <form onSubmit={this.doLogin}>
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
                <Link to="/feed" ><button className="guest-button">Guest</button></Link>
              </div>

            </article>
            <form onSubmit={this.doSignup}>
            <article className="signup-container">

              <div>
                <Link to="/signup" ><button className="signup-button">Signup</button></Link>
              </div>

            </article>
            </form>
          </section>
        </section>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    // users: state.userReducer.users,
    // loggedInUser: state.userReducer.loggedInUser,
    // isLoading: state.systemReducer.isLoading
  };
};
const mapDispatchToProps = {
  login,
  logout,
  signup,
  removeUser,
  loadUsers
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);