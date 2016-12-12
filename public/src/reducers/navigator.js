export default (state = {} , action) => {
  //第一次加载时会自动调用该函数 此时action.type不是规定的值
  //if(action.type.indexOf("@@redux") > 0)  action.type = "en"
  switch (action.type) {
    case "switNavItem":
      return Object.assign({},state,{actvNavIt:action.data})
    default:
      return state
  }
}




