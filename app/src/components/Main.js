import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RestaurantList from './RestaurantList'
import RestaurantData from './RestaurantData'
import Login from './Header/Session/Login'
import NewSignIn from './Login/Login'
import Register from './Registration/Registration'


const Main = () => (
    <main>
        <Switch>
          <Route exact path='/' component={RestaurantList}/>
          <Route exact path='/restaurant' component={RestaurantData}/>
          <Route exact path='/form' component={Login}/>
          <Route exact path='/newsignin' component={Register}/>


        </Switch>
    </main>
)

export default Main
