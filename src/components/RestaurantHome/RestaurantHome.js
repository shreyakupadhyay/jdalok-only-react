import React, { Component } from 'react';
import style from './RestaurantHome.css';
import { Tab,Icon, Label, Menu, Table, Container, Button, Popup, Breadcrumb } from 'semantic-ui-react';
import Overview from './Overview';
import Photos from './Photos';
import PeopleRating from './PeopleRating';
var id;
const panes = [
    { menuItem: 'Overview', render: () => <Tab.Pane attached={false}><Overview /></Tab.Pane> },
    { menuItem: 'Menu', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Photos', render: () => <Tab.Pane attached={false}><Photos /></Tab.Pane> },
  ]

export function getid(){
    return id;
}
function setid(props){
    id = props.match.params.id;
}
class RestaurantHome extends Component {
    constructor(props){
        super(props)
        setid(props)
        this.state = {
            requestFailed: false,
        }
    }
    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    componentDidMount(){

        const urlCall = "http://localhost:8000/api/v1/restaurants/jhansi/index"
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
        var rest = this.state.restaurantData;
        // if(this.state.requestFailed) return <p>Failed!!!</p>
        // if(!this.state.restaurantData) return <p>Loading.....</p>
        if(rest === undefined)
            return(<div/>);
        else
        return (
            <div>
                <Breadcrumb size='large' style={{ padding: '10px' }}>
                    <Breadcrumb.Section link>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section link>Jhansi</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section active>Restaurant Information</Breadcrumb.Section>
                </Breadcrumb>
                <div class="portrait">
                    <img src={rest["restaurants"][getid()]["title_image"]} />
                </div>
                <Tab menu={{ pointing: true }} panes={panes}/>
          </div>
        )
    }
}


export default RestaurantHome;
