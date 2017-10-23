import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RestaurantList from './components/RestaurantList'
import RestaurantData from './components/RestaurantData'

const Routes = () => {
    <routes>
        <Switch>
            <Route exact path='/' component={RestaurantList}/>
            <Route exact path='/restaurant' component={RestaurantData}/>
        </Switch>
    </routes>
}


export default Routes;