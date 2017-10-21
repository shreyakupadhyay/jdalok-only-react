import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RestaurantList from './RestaurantList'
import RestaurantData from './RestaurantData'
import SignIn from './SignIn/SignIn'
import Form from './Header/Form/FormSignIn'

const Main = () => (
    <main>
        <Switch>
          <Route exact path='/' component={RestaurantList}/>
          <Route exact path='/restaurant' component={RestaurantData}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/form' component={Form}/>

        </Switch>
    </main>
)

export default Main
