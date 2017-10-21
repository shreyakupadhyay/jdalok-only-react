import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DashBoard from './DashBoard'

const Main = () => (
    <main>
        <Switch>
          <Route exact path='/' component={DashBoard}/>
          {/* <Route exact path='/restaurant' component={RestaurantData}/> */}
          {/* <Route exact path='/form' component={Login}/> */}
          {/* <Route exact path='/newsignin' component={Register}/> */}


        </Switch>
    </main>
)

export default Main
