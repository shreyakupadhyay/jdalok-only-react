import React, { Component } from 'react';
import style from './Register.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Image, Modal, Checkbox } from 'semantic-ui-react'
import axios from 'axios';

const styles = {
    authModel: {
      fontSize: "20px",
      margin: "20px",
      border: "none",
    }
}


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            requestFailed: false,
            open: false,
            username: '',
            email:'',
            password:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    closeConfigShow = (closeOnEscape, closeOnRootNodeClick, dimmer) => () => {
        this.setState({ closeOnEscape, closeOnRootNodeClick, dimmer, open: true })
    }

    close = () => this.setState({open: false})    

    handleSubmit(event){
        event.preventDefault();
        
        this.setState({open:false})
        
        var formData  = new FormData();
        formData.append("email", this.state.username);
        formData.append("password", this.state.password);
        formData.append("name", this.state.username);


        fetch("http://localhost:8000/users/registrations", {
            method: 'post',
            body: formData
        })
        .then((response) => response.json())
        .catch((error) => console.log(error));

    }
    

    render() {
        const { open, dimmer, closeOnEscape, closeOnRootNodeClick } = this.state
        
        return (
            <div>
                <Button basic color='green' style={ styles.button } name="signup" onClick={this.closeConfigShow(false, false,'blurring','signup')}>SignUp</Button>
                
                <Modal dimmer={dimmer} 
                    closeOnEscape={closeOnEscape}
                    closeOnRootNodeClick={closeOnRootNodeClick}
                    open={open} 
                    onClose={this.close} closeIcon>

                    <Modal.Header>Sign Up </Modal.Header>
                    
                    <form style={styles.authModel}>
    
                        <div className="group">      
                            <input type="text" value={this.state.username} onChange={(event) => this.setState({username:event.target.value})} required/>
                            <label>UserName</label>
                        </div>
                            
                        <div className="group">      
                        <input type="email" value={this.state.email} onChange={(event) => this.setState({email:event.target.value})} required/>
                            <label>Email</label>
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
            </div>
        )
    }
}

export default Register;