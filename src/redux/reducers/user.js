

let user = {
  username:"登陆",
  email:"",
  avatar:""
}


export default  function userReducer(state=user,action){

  switch (action.type) {
    case "xxx":
          return  state
    default:
    return state;

  }
}
