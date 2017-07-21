import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import SignUp from './SignUp'
import Header from './Header'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from  "react-router-dom"
import {Provider}  from "react-redux"
import store from "./redux/store"

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
              <div>
              <Header />
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/signup" component={SignUp}></Route>
            </Switch>
              </div>
        </Router>
      </Provider>


    )
  }
}

export default App;
