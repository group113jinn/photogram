import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../cmps/Header';


import {
  removeUser,
  signup
} from '../store/actions/userActions';

 class _Signup extends Component {

    state = {
        signupCred: {
          email: '',
          password: '',
          username: ''
        }
      }



    signupHandleChange = ev => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
          signupCred: {
            ...prevState.signupCred,
            [name]: value
          }
        }));
      };


      onSignup = async ev => {
        ev.preventDefault();
        const { email, password, username } = this.state.signupCred;
        if (!email || !password || !username) {
          return this.setState({ msg: 'All inputs are required!' });
        }
        const signupCreds = { email, password, username };
        console.log(signupCreds);
        this.props.signup(signupCreds);
        this.setState({ signupCred: { email: '', password: '', username: '' } });
        this.props.history.push('/feed')
      };


      
  removeUser = userId => {
    this.props.removeUser(userId);
  };



    render() {
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
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
      // users: state.userReducer.users,
    //   loggedInUser: state.userReducer.loggedInUser,
    //   isLoading: state.systemReducer.isLoading
    };
  };
  const mapDispatchToProps = {
    signup,
    removeUser,
  };
  
  export const Signup = connect(mapStateToProps, mapDispatchToProps)(_Signup);
