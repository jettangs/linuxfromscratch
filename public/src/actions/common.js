const switLan = (lan) => {
  return {
    type: "switLan",
    data: lan
  }
}

const dispSignBox = (dat) => {
  return {
    type: "dispSignBox",
    data: dat
  }
}

const setUsrIsSgi = (dat) => {
  return {
    type: "setUsrIsSgi",
    data: dat
  }
}

const setUsrInf = (dat) => {
  return {
    type: "setUsrInf",
    data: dat
  }
}

const getUsrInf = (cb) => {
  return (dispatch)=>{
    fetch(
        "/session",
        { 
          credentials: 'include',
          method: "GET"
        }
    ).then(
        response => response.json()
    ).then(
        dat => {
          if(cb) cb(dat)
        }
    ).catch(
        e => console.error(e)
    )
  }
}

export default { switLan, dispSignBox, getUsrInf, setUsrIsSgi, setUsrInf }
