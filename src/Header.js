import React, { Component } from 'react'
import {Link} from  "react-router-dom"
import {connect} from  "react-redux"
import store from "./redux/store"

class Header  extends Component{
  render(){
    let authStr =(
      <div>
          <Link to="/signup">注册</Link>
          <Link to="/login">登陆</Link>
      </div>
    )

    let userInfo =(
      <div>
        {this.props.currentUser}|退出
      </div>

    )


    return(
    <div>
    <Link to="/">首页</Link>
        {this.props.isAuthenticated?userInfo:authStr}
    </div>



    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.account.isAuthenticated,
  currentUser:state.account.currentUser
})

export default connect(mapStateToProps)(Header)
