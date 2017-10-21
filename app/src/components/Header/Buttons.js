import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Popup, Button, Header, Image, Modal, Checkbox } from 'semantic-ui-react'
import Login from './Session/Login';
import Register from './Session/Register';

const styles = {
    authModel: {
      fontSize: "20px",
      margin: "10px",
      border: "none",
    }
}


class SignIn extends Component {
    constructor(props){
      super(props)
      this.state = {
          requestFailed: false,
          open: false,
          auth: ''
      }
  }


  closeConfigShow = (closeOnEscape, closeOnRootNodeClick, dimmer, auth) => () => {
      this.setState({ closeOnEscape, closeOnRootNodeClick, dimmer, auth, open: true })
  }
  
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer, closeOnEscape, closeOnRootNodeClick } = this.state

    return (
      <div>


        <Button basic color='green' style={ styles.button } onClick={this.closeConfigShow(false, false,'blurring','signin')}>SignIn</Button>
        <Button basic color='green' style={ styles.button } onClick={this.closeConfigShow(false, false,'blurring','signup')}>SignUp</Button>

        {(this.state.auth=='signin' ?
          <Modal dimmer={dimmer} 
              closeOnEscape={closeOnEscape}
              closeOnRootNodeClick={closeOnRootNodeClick}
              open={open} 
              onClose={this.close} closeIcon>

              <Modal.Header>Sign In </Modal.Header>
              <Login />
              <Modal.Actions>
              <Button positive icon='checkmark' labelPosition='right' content="Submit" onClick={this.close} />
          </Modal.Actions>
          </Modal>
         : 
         <Modal dimmer={dimmer} 
              closeOnEscape={closeOnEscape}
              closeOnRootNodeClick={closeOnRootNodeClick}
              open={open} 
              onClose={this.close} closeIcon>

              <Modal.Header>Sign Up </Modal.Header>
              <Register /> 
              <Modal.Actions>
                <Button positive icon='checkmark' labelPosition='right' content="Submit" onClick={this.close} />
              </Modal.Actions>
          </Modal>
        )}
        
      </div>
    )
  }
}

export default SignIn;
