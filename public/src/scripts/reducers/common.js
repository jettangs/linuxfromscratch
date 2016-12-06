export default (state = { language: "en", signBoxIsDisp: false, usrIsSgi: false, usrInf:""}, action) => {
  switch (action.type) {
    case "switLan":
      return Object.assign({},state,{language: action.data})
    case "dispSignBox":
      return Object.assign({},state,{signBoxIsDisp: action.data})
    case "setUsrIsSgi":
      return Object.assign({},state,{usrIsSgi: action.data})
    case "setUsrInf":
      return Object.assign({},state,{usrInf: action.data})
    default:
      return state
  }
}