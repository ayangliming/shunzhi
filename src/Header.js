import React, { Component } from 'react'
import {Link} from  "react-router-dom"
import {connect} from  "react-redux"
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
        why|退出
      </div>

    )


    return(
    <herder>
    {this.props.isAuthenticated?authStr:userInfo}

    </herder>

    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.account.isAuthenticated
})

export default connect(mapStateToProps)(Header)
