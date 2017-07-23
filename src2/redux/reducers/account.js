
let account ={
  isAuthenticated:false,
  currentUser:""
}



export default function accountReducer(state=account,action){
  switch (action.type) {
    case "xxx":
          return {isAuthenticated:true,currentUser:"取消"}

    default:
    return state

  }
}
