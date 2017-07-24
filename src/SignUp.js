  // 注册
import React, { Component } from 'react'
import axios from "axios"
import store from './redux/store'

class SignUp extends Component {
    style={
      "width":"300px",
      "margin":"20px auto"
    }

    signup=(e)=>{
      e.preventDefault()
      let username= this.userNameInput.value
      let password= this.passwordInput.value
      console.log({username,password})
      let data ={username,password}
      axios.post('http://192.168.0.122:3008/user/signup',data)
      .then(res=>{
        console.log(res)
        if (res.data.username) {
          store.dispatch({type:"xxx",username:res.data.username})
          this.signupForm.reset()
          // 提交后清空表单
          localStorage.setItem('userId', res.data.userId)
          this.props.history.push('/')

        }

      })
    }
    componentDidMount() {
     let userId = localStorage.getItem('userId')
     console.log('userId', userId)
     if(userId) {
       axios.get(`http://192.168.0.122:3008/user/${userId}`).then(res => {
         console.log(res.data.user.username)
         store.dispatch({ type: 'AUTH_USER', username: res.data.user.username })
       })
     }
   }

  render() {
    return (
        <div style={this.style}>
            <h1>注册</h1>
            <form onSubmit={this.signup} ref={value=>{this.signupForm=value}}>
              <div>
                <input ref={value=>this.userNameInput=value} type="text" placeholder="用户名"/>
              </div>
              <div>
                <input ref={value=>this.passwordInput=value} type="password" placeholder="password"/>
              </div>
              <div>
                <input type="password" placeholder="再输入一次"/>
              </div>
              <div>
                <input type="submit"/>
              </div>
            </form>
        </div>

    )
  }
}

export default SignUp;
