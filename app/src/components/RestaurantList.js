import React, { Component } from 'react';
import './RestaurantList.css';

const urlCall = "http://localhost:8000/api/v1/restaurants/jhansi/index"

class RestaurantList extends Component {
    constructor(props){
        super(props)
        this.state = {
            requestFailed: false
        }
    }

    componentDidMount(){
        fetch(urlCall)
            .then(response => {
                if(!response.ok){
                    throw Error("Network Request Failed")
                }

                return response
            })
            .then(data=>data.json())
            .then(data=> {
                this.setState({
                    restaurantData: data
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }
  
  
    render() {

        if(this.state.requestFailed) return <p>Failed!!!</p>        
        if(!this.state.restaurantData) return <p>Loading.....</p>
        var restaurantList = this.state.restaurantData.restaurants;
        return (
        <div className="App">
            { restaurantList.map(item =>
                <h2 key={item.id}> 
                    {item.name}
                </h2>
            )

            }
        </div>
        );
    }
}

export default RestaurantList;