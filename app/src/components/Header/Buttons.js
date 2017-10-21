import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Login from './Session/Login';
import Register from './Session/Register';



class SignIn extends Component {
  
  render() {
    return (
      <div>
        <Login />
        <Register />
        
      </div>
    )
  }
}

export default SignIn;
