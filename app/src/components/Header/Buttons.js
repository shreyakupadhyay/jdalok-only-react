import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Popup, Button, Header, Image, Modal, Checkbox } from 'semantic-ui-react'
import FormSignIn from './Form/FormSignIn';

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
          signin: '',
          signup:''
      }
  }


  closeConfigShow = (closeOnEscape, closeOnRootNodeClick, dimmer) => () => {
      this.setState({ closeOnEscape, closeOnRootNodeClick, dimmer, open: true })
  }
  
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer, closeOnEscape, closeOnRootNodeClick } = this.state

    return (
      <div>


        <Button basic color='green' style={ styles.button } onClick={this.closeConfigShow(false, false,'blurring')}>SignIn</Button>
        <Button basic color='green' style={ styles.button } onClick={this.closeConfigShow(false, false,'blurring')}>SignUp</Button>

        <Modal dimmer={dimmer} 
            closeOnEscape={closeOnEscape}
            closeOnRootNodeClick={closeOnRootNodeClick}
            open={open} 
            onClose={this.close} closeIcon>
          
            <Modal.Header>Sign In </Modal.Header>          
            <FormSignIn />

          <Modal.Actions>
            <Button positive icon='checkmark' labelPosition='right' content="Submit" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default SignIn;
