import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import SignUp from './SignUp'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from  "react-router-dom"
class App extends Component {

  render() {
    return (

        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/signup" component={SignUp}></Route>
            </Switch>

        </Router>



    )
  }
}

export default App;
