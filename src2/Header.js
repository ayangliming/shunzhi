import React from "react"
import {
    Link
} from  "react-router-dom"
import {connect} from  "react-redux"

class Header extends React.Component{

  render(){
    let authStr=(
      <div>
        <Link to="/homepage">登陆</Link>
        <Link to="/signup">注册</Link>
      </div>
    )

    let userInfo =(
      <div>
        {this.props.currentUser}|退出
      </div>

    )
    return(
        <div>
        {authStr,userInfo}

        </div>

    )
  }
}
const mapStateToProps =(state)=({
  isAuthenticated:state.account.isAuthenticated,
  currentUser:state.account.currentUser
})

export default connect(mapStateToProps)(Header)
