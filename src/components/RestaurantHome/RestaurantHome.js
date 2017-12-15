import React, { Component } from 'react';
import style from './RestaurantHome.css';
import { Tab,Icon, Label, Menu, Table, Container, Button, Popup, Breadcrumb } from 'semantic-ui-react';
import Overview from './Overview';
import Photos from './Photos';
import PeopleRating from './PeopleRating';

const panes = [
    { menuItem: 'Overview', render: () => <Tab.Pane attached={false}><Overview /></Tab.Pane> },
    { menuItem: 'Menu', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Photos', render: () => <Tab.Pane attached={false}><Photos /></Tab.Pane> },
  ]

class RestaurantHome extends Component {
    constructor(props){
        super(props)

        this.state = {
            requestFailed: false,
        }        
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    componentDidMount(){
    
    const urlCall = window.location.href
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

    render(){
        // if(this.state.requestFailed) return <p>Failed!!!</p>        
        // if(!this.state.restaurantData) return <p>Loading.....</p>
        return (
            <div>
                <div class="progressive_img_loaded" style={{ backgroundImage: 'url(&quot;https://b.zmtcdn.com/data/pictures/chains/6/50066/481a8438b57d25815e87ee14c75aa3e5.jpg?resize=1217%3A817&amp;crop=1200%3A464%3B7%2C70&quot;); opacity: 1;'}}>
                </div>
            <Breadcrumb size='large' style={{ padding: '10px' }}>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section link>Jhansi</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section active>Restaurant Information</Breadcrumb.Section>
            </Breadcrumb>
            <Tab menu={{ pointing: true }} panes={panes}/>
          </div>
        )
    }
}


export default RestaurantHome;