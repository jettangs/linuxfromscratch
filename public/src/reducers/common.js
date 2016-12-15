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
  //第一次加载时会自动调用该函数 此时action.type不是规定的值
  //if(action.type.indexOf("@@redux") > 0)  action.type = "en"
    case "switNavItem":
      return Object.assign({},state,{actvNavIt:action.data})
    default:
      return state
  }
}