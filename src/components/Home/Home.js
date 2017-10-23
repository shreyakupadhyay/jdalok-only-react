import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LoggedInHeader from '../Header/LoggedInHeader/LoggedInHeader'
import { Button } from 'semantic-ui-react'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        };

        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    isAuthenticated(){
        const token = localStorage.getItem('token');
        return token && token.length > 10
    }

    handleLogout(){
        localStorage.removeItem('token');
        this.setState({});
    }


    render(){

        const isAuth = this.isAuthenticated();         
        return (
            <div>
                {!isAuth ? <Redirect to={{pathname:'/'}} /> : (
                    <div>
                        <LoggedInHeader handleLogout={this.handleLogout}/>
                        <h1>Hello</h1>
                    </div>
                )}
                
            </div>
        )
    }
}


export default Home;