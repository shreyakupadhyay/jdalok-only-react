import React, { Component } from 'react';
import style from './Login.css';
import 'semantic-ui-css/semantic.min.css';
import { Popup, Button, Header, Image, Modal, Checkbox } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
  

const styles = {
    authModel: {
      fontSize: "20px",
      margin: "20px",
      border: "none",
    }
}

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            requestFailed: false,
            open: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }
    



    closeConfigShow = (closeOnEscape, closeOnRootNodeClick, dimmer) => () => {
        this.setState({ closeOnEscape, closeOnRootNodeClick, dimmer, open: true })
    }

    close = () => this.setState({open: false})

    handleSubmit(event){
        event.preventDefault();
        var apiBaseUrl = "http://localhost:4000/signin/";
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        fetch(apiBaseUrl, {
            method: 'post',
            body: payload
        })
        .then((response) => {
            response.json()
            localStorage.setItem('token',response.body.token)
            // this.setState();
            this.setState({open:false})  // close window only when there is successful login
         
        })
        .catch((error) => console.log(error));
    }

    isAuthenticated(){
        const token = localStorage.getItem('token');
        return token && token.length > 10
    }

    render() {
        const { open, dimmer, closeOnEscape, closeOnRootNodeClick } = this.state
        const isAuth = this.isAuthenticated(); 

        return (
            <div>
            {isAuth ? <Redirect to={{pathname:'/home/restaurants'}} /> : (  <div>
                <Button basic color='green' style={ styles.button } onClick={this.closeConfigShow(false, false,'blurring','signin')}>SignIn</Button>
                
                <Modal dimmer={dimmer} 
                        closeOnEscape={closeOnEscape}
                        closeOnRootNodeClick={closeOnRootNodeClick}
                        open={open} 
                        onClose={this.close} closeIcon>

                        <Modal.Header>Sign In </Modal.Header>
                        
                        <form style={styles.authModel} >
    
                            <div className="group">      
                                <input type="text" value={this.state.username} onChange={(event) => this.setState({username:event.target.value})} required/>
                                <label>Username</label>
                            </div>
                                
                            <div className="group">      
                                <input type="password" value={this.state.password} onChange={(event) => this.setState({password:event.target.value})} required/>
                                <label>Password</label>
                            </div>
                            
                        </form> 

                        <Modal.Actions>
                        <Button positive icon='checkmark' labelPosition='right' content="Submit" onClick={this.handleSubmit} />
                    </Modal.Actions>
                </Modal>     
            </div> )}  
            </div>
        )
    }
}

export default Login;