// 此方法消耗性能 建议获取dom后 保存引用 再设值 不建议使用此方法
// const setDomValue = (name, param, value) => {
//   for(let d = 0; d < document.styleSheets.length; d++) {
//     let sty, ruls = document.styleSheets[d].cssRules
//     for(let i = 0; i < ruls.length; i++) {
//       sty = ruls[i]
//       //if(sty.selectorText) console.log(sty.selectorText.toLowerCase())
//       if(sty.selectorText && (sty.selectorText.toLowerCase() == name.toLowerCase())) {
//         sty.style[param] = value
//       }
//     }
//   }
// }

const getNode = (name) => {
    return document.querySelectorAll(name)
}

const getNodeValue = (name, param) => {
    return document.querySelectorAll(name)[0][param]
}

const getDom = (name) => {
    return document.getElementsByClassName(name)
}

const getDomValue = (name, param) => {
  let value
  for(let d = 0; d < document.styleSheets.length; d++) {
    let sty, ruls = document.styleSheets[d].cssRules
    for(let i = 0; i < ruls.length; i++) {
      sty = ruls[i]
      if(sty.selectorText && (sty.selectorText.toLowerCase() == name.toLowerCase())) {
        value = sty.style[param]
      }
    }
  }
  return value
}

export default { getNode, getNodeValue, getDom, getDomValue }