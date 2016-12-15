//Username, Password length: 2-10, can only be Number,Chinese or English character

let usnaReg = /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]{2,16}$/
let pwdReg = /^[a-zA-Z0-9]{6,10}$/
let emReg = /^(?=\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$).{8,28}$/

export const vldUsna = (val) => {
    return usnaReg.test(val)
}

export const vldPwd = (val) => {
    return pwdReg.test(val)
}

export const vldEm = (val) => {
    return emReg.test(val)
}
