import React, { Component } from 'react';
import style from './FormSignIn.css';


const styles = {
    authModel: {
      margin: "20px",
    }
}

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            pager: {}
        };
    }
    render() {
        return (
                <form style={styles.authModel}>
  
                <div class="group">      
                    <input type="text" required/>
                    <label>Name</label>
                </div>
                    
                <div class="group">      
                    <input type="text" required/>
                    <label>Email</label>
                </div>

                <div class="group">      
                    <input type="text" required/>
                    <label>Email</label>
                </div>
                
                </form> 
        )
    }
}

export default Form;