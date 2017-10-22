import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Login from '../Session/Login';
import Register from '../Session/Register';


const styles = {
  flex: {
    display: 'flex'
  }
}

class SignIn extends Component {
  
  render() {
    return (
      <div style={styles.flex}>
        <Login />
        <Register />
      </div>
    )
  }
}

export default SignIn;
