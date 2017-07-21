 // 主页
import React, { Component } from 'react'
import {Link} from  "react-router-dom"

class HomePage extends Component {

  render() {
    return (
        <div>
          <Link to="/signup">注册</Link>
        </div>

    )
  }
}

export default HomePage;
