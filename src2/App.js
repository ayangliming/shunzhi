import React from "react"
import Homepage from "./Homepage"
import SignUp from "./SignUp"
import Header from "./Header"
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from  "react-router-dom"


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
        <div>
          <Header />
        <Route path="/homepage" exact component={Homepage}></Route>
        <Route path="/signup" component={SignUp}></Route>

        </div>
        </Router>
      </div>
    )
  }
}
export default App
