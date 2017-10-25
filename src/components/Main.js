import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DashBoard from './DashBoard'
import Home from './Home/Home'
import LoggedInHeader from './Header/LoggedInHeader/LoggedInHeader'
import Pagination from './Footer/Pagination/PageDiv'


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={DashBoard}/>
            {/* <Route path='/home' component={LoggedInHeader}/> */}
            <Route exact path='/home/restaurants' component={Home}/>    
            <Route exact path='/pages' component={Pagination}/>    
                    
          
          {/* <Route exact path='/restaurant' component={RestaurantData}/> */}
          {/* <Route exact path='/form' component={Login}/> */}
          {/* <Route exact path='/newsignin' component={Register}/> */}


        </Switch>
    </main>
)

export default Main
