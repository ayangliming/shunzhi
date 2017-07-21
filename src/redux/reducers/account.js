
let account = {
  isAuthenticated:false,
  currentUser:""
}


export default  function accountReducer(state=account,action){

  switch (action.type) {
    case "xxx":
          return  state
    default:
    return state;

  }
}
