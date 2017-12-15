import React, { Component } from 'react';
import style from './RestaurantHome.css';
import { Tab,Icon, Label, Menu, Table, Container, Button, Popup } from 'semantic-ui-react';
import PeopleRating from './PeopleRating';

class Overview extends Component {
    render(){
        return (
            <div>
            <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell style={{ maxWidth: '20px' }}>
                <h2 class="mb5" tabindex="0" role="heading" aria-label="Phone number">Phone Numbers</h2>
                <span class="tel left res-tel">
                    <span class="fontsize2 bold zgreen">
                        <span tabindex="0" aria-label="080 60600001" class="tel">080 60600001</span>
                    </span><br />
                    <span class="fontsize2 bold zgreen">
                        <span tabindex="0" aria-label=" 080 60600000" class="tel"> 080 60600000</span>
                    </span><br />           
                </span>
                </Table.Cell>
                <Table.Cell style={{ maxWidth: '20px' }}>
                <div class="mbot">
                        <div class="res-info-group clearfix">
                            <h2 tabindex="0" class="mt0 mb5">Opening hours</h2>
                            <span class="tel left res-tel">
                                <span class="fontsize2">
                                    <span tabindex="0" aria-label="080 60600001" class="tel">Today  12 Noon to 3 PM, 6:30 PM to 11 PM</span>
                                </span><br />
                                <span class="fontsize2 bold zred">
                                    <span tabindex="0" style={{ fontSize: '14px'}} aria-label=" 080 60600000" class="tel">see more</span>
                                </span><br />           
                            </span>    
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell style={{ maxWidth: '20px' }}>
                <div class="mbot">
                        <div class="res-info-group clearfix">
                            <h2 tabindex="0" class="mt0 mb5">More Info</h2>
                            <span class="tel left res-tel">
                                <span class="fontsize2">
                                    <span tabindex="0" aria-label="080 60600001" class="tel">No Alcohol Available</span>
                                </span><br />
                                <span class="fontsize2">
                                    <span tabindex="0" aria-label="080 60600001" class="tel">Valet Parking Available</span>
                                </span><br />
                                <span class="fontsize2 bold zred">
                                    <span tabindex="0" style={{ fontSize: '14px'}} aria-label=" 080 60600000" class="tel">see more locations</span>
                                </span><br />           
                            </span>    
                        </div>
                    </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ maxWidth: '20px' }}>
                    <div class="mbot">
                        <div class="res-info-group clearfix">
                            <h2 tabindex="0" class="mt0 mb5">Cuisines</h2>
                            <span class="tel left res-tel">
                                <span class="fontsize2 zred">
                                    <span tabindex="0" aria-label="080 60600001" class="tel">North Indian</span>
                                </span><br />
                                <span class="fontsize2 zred">
                                    <span tabindex="0" aria-label=" 080 60600000" class="tel">European </span>
                                </span><br />           
                            </span>    
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell style={{ maxWidth: '20px' }}>
                    <div class="mbot">
                        <div class="res-info-group clearfix">
                            <h2 tabindex="0" class="mt0 mb5">Address</h2>
                            <span class="tel left res-tel">
                                <span class="fontsize2">
                                    <span tabindex="0" aria-label="080 60600001" class="tel">94, Neeladri Nagar, 14th Cross Neeladri Main Road, Doddathogur, Electronic City, Bangalore</span>
                                </span><br />
                                <span class="fontsize2 bold zred">
                                    <span tabindex="0" style={{ fontSize: '14px'}} aria-label=" 080 60600000" class="tel">see more locations</span>
                                </span><br />           
                            </span>    
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell style={{ maxWidth: '20px' }}>
                    <div class="mbot">
                        <div class="res-info-group clearfix">
                            <h2 tabindex="0" class="mt0 mb5">Featured in Collection</h2>
                            <span class="tel left res-tel">
                                <span class="fontsize2 zred">
                                    <span tabindex="0" aria-label="080 60600001" class="tel">Great Buffets</span>
                                </span><br />       
                            </span>    
                        </div>
                    </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ maxWidth: '20px' }}>
                    <div class="mbot">
                        <div class="res-info-group clearfix">
                            <h2 tabindex="0" class="mt0 mb5">Average Cost</h2>
                            <span class="tel left res-tel">
                                <span class="fontsize2"> 
                                    <span tabindex="0" aria-label="080 60600001" class="tel">₹1,600 for two people (approx.) </span>
                                </span><br />
                                <span class="fontsize1"> 
                                    <span tabindex="0" aria-label="080 60600001" class="tel">Cash and card accepted</span>
                                </span><br />           
                            </span>    
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell style={{ maxWidth: '20px'}}>
                <div class="mbot">
                        <div class="res-info-group clearfix">
                            <h2 tabindex="0" class="mt0 mb5">Directions on Map</h2>
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell style={{ maxWidth: '20px' }}>
                    <div class="mbot">
                        <div class="res-info-group clearfix">
                            <h2 tabindex="0" class="mt0 mb5">Known For</h2>
                            <span class="tel left res-tel">
                                <span class="fontsize2">
                                    <span tabindex="0" aria-label="080 60600001" class="tel">an indoor barbecue concept venue offering a 'Do-It-Yourself' grilling experience at every table</span>
                                </span><br />       
                            </span>    
                        </div>
                    </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
        
          </Table>
          <PeopleRating />
          </div>
        )
    }
}


export default Overview;