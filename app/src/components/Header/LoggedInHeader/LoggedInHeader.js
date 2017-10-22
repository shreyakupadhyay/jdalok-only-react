import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


class LoggedInHeader extends Component {

    render(){
        return (
            <div>
               <Button basic color='green' onClick={this.props.handleLogout}>Logout</Button>
            </div>
        )
    }
}


export default LoggedInHeader;