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

        var formData  = new FormData();
        formData.append("email", this.state.username);
        formData.append("password", this.state.password);

        fetch("http://localhost:8000/users/authenticate_user", {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            var auth_token = response.text()
            auth_token.then((value) => {
                var value1 = JSON.parse(value)['auth_token']
                localStorage.setItem('auth_token',value1)
                this.setState({})
        
            })
            // this.setState();
            this.setState({open:false})  // close window only when there is successful login
         
        })
        .catch((error) => console.log(error));
    }

    isAuthenticated(){
        const auth_token = localStorage.getItem('auth_token');
        return auth_token && auth_token.length > 10
    }

    render() {
        const { open, dimmer, closeOnEscape, closeOnRootNodeClick } = this.state
        const isAuth = this.isAuthenticated(); 

        return (
            <div>
            {isAuth ? <Redirect to={{pathname:'/home/restaurants'}} /> : (  <div>
                <Button basic color='green' style={ styles.button } name="signin" onClick={this.closeConfigShow(false, false,'blurring','signin')}>SignIn</Button>
                
                <Modal dimmer={dimmer} 
                        closeOnEscape={closeOnEscape}
                        closeOnRootNodeClick={closeOnRootNodeClick}
                        open={open} 
                        onClose={this.close} closeIcon>

                        <Modal.Header>Sign In </Modal.Header>
                        
                        <form style={styles.authModel} >
    
                            <div className="group">      
                                <input name="username" type="text" value={this.state.username} onChange={(event) => this.setState({username:event.target.value})} required/>
                                <label>Username</label>
                            </div>
                                
                            <div className="group">      
                                <input name="password" type="password" value={this.state.password} onChange={(event) => this.setState({password:event.target.value})} required/>
                                <label>Password</label>
                            </div>
                            
                        </form> 

                        <Modal.Actions>
                        <Button positive icon='checkmark' name="submit" labelPosition='right' content="Submit" onClick={this.handleSubmit} />
                    </Modal.Actions>
                </Modal>     
            </div> )}  
            </div>
        )
    }
}

export default Login;