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
                // console.log(data.restaurants)
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
        console.log(restaurants)
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
                            <Card.Group key={item.id}>
                                <Card style={ styles.cards }>
                                    <Card.Content>
                                        <Image floated='right' size='small' src={item.title_image} />
                                        <Card.Header>
                                        <Link to={`/jhansi/restaurants/${item.id}`} style={{color: 'black'}}>
                                            {item.name}
                                        </Link>
                                        </Card.Header>
                                        <Card.Meta>
                                        <Link to={`/jhansi/restaurants/${item.city}`} style={{color: 'black'}}>
                                            {item.city}
                                        </Link>
                                        </Card.Meta>
                                        <Card.Description>
                                        Address:   {item.address}
                                        </Card.Description>
                                        <Card.Description>
                                        Hours:     {item.hours}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                    ) )}
                <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                </div>

            </div>
        );
    }
}

export default DashBoard;
