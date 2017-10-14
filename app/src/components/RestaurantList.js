import React, { Component } from 'react';
import './RestaurantList.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Image } from 'semantic-ui-react'

import SearchExampleStandard from './Search';
import Header from './Header';

const styles = {
    container: {
        margin: "auto",
        width: "60%"
    },
    cards: {
        width: "100%"
    },
    nav: {
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px 0"
    }
}

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
        var restaurants = this.state.restaurantData.restaurants;
        return (
            <div>
                <div style={styles.nav}>
                    <SearchExampleStandard data={restaurants}/>                   
                    <Header />
                </div>
                <div className="right-ct-container col-md-10 col-sm-10  padding0" style={ styles.container }>
                { restaurants.map((item) => (
                        <Card.Group key={item.id}>
                            <Card style={ styles.cards }>
                                    <Card.Content>
                                        <Image floated='right' size='mini' src='https://content.jdmagicbox.com/comp/jhansi/m5/9999px510.x510.160819185440.p5m5/catalogue/the-handi-restrurent-jhansi-xzojl.jpg' />
                                        <Card.Header>
                                        {item.name}
                                        </Card.Header>
                                        <Card.Meta>
                                        {item.city}
                                        </Card.Meta>
                                        <Card.Description>
                                        {item.address}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                        <Button basic color='green'>Show Details</Button>
                                        <Button basic color='red'>Contact</Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                    ) )}
                </div>
            </div>
        );
    }
}

export default RestaurantList;