import React, { Component } from 'react';
import './DashBoard.css';
import _ from 'lodash';
import Pagination from './Footer/Pagination/Pagination';

import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 

import LocationSearch from './Header/Search/LocationSearch';
import RestaurantSearch from './Header/Search/RestaurantSearch';
import LoggedOutHeader from './Header/LoggedOutHeader/LoggedOutHeader';

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
    },
    imagery: { 
        backgroundImage: 'url(' + 'https://i.stack.imgur.com/3RzQA.jpg' + ')',
        backgroundSize: "cover",
        minHeight: "500px",
        minWidth: "100%"
    },
    root: {
        width: "100%"
    }
}


const urlCall = "http://localhost:8000/api/v1/restaurants/jhansi/index"

class DashBoard extends Component {
    constructor(props){
        super(props)

        // var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });
        
        this.state = {
            requestFailed: false,
            exampleItems: [],
            pageOfItems: []
        }

        this.onChangePage = this.onChangePage.bind(this);
        
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
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
                    restaurantData: data,
                    exampleItems:data.restaurants
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
                <div style={ styles.root }>
                    {/* <div style={ styles.imagery}>
                    </div> */}
                    <div style={styles.nav}>
                        <LocationSearch />
                        <RestaurantSearch data={restaurants}/>                   
                        <LoggedOutHeader />
                    </div>
                    <div className="right-ct-container col-md-10 col-sm-10  padding0" style={ styles.container }>
                    { this.state.pageOfItems.map((item) => (
                            <Link to={`/jhansi/restaurants/${item.name}`}>
                            
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
                            </Link>
                        ) )}
                    <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />                        
                    </div>
                    
                </div>
            );
    }
}

export default DashBoard;