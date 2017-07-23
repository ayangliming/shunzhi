import React from "react"


class SignUp extends  React.Component{
  style={
    "width":"300px",
    "margin":"20px auto"
  }
      signup=(e)=>{
        e.preventDefault()
        let username=this.userNameInput.value
        let passwordname=this.passwordInput.value
        console.log(username,passwordname)
      }
  render(){
    return(
      <div style={this.style}>
          <h1>注册</h1>
          <form onSubmit={this.signup}>
            <div>
              <input ref={value=>this.userNameInput=value} type="text" placeholder="用户名"/>
            </div>
            <div>
              <input ref={value=>this.passwordInput=value} type="passdord" placeholder="password"/>
            </div>
            <div>
              <input type="passdord" placeholder="再输入一次"/>
            </div>
            <div>
              <input type="submit"/>
            </div>
          </form>
      </div>

    )
  }
}

export default SignUp
