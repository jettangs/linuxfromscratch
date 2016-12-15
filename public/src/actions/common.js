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

//用户是否登录
const chkUsrSgi = (cb) => {
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

//获取用户信息
const getUsrInf = (id,cb) => {
  return (dispatch)=>{
    fetch(
        "/user/"+id,
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

const updUsrInf = (data,cb) => {
    return (dispatch) => {
        let postDatArr = []
        let postStr = ""
        if(! data._id) {
            console.log("user._id is undefined")
            return
        }
        data.username && postDatArr.push("username="+data.username) 
        data.password && postDatArr.push("password="+data.password) 
        data.email && postDatArr.push("email="+data.email) 
        postStr = postDatArr.join('&')
        fetch("user",{ 
            method:"PUT",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:postStr
        }).then(
            response => response.json()
        ).then(
            data => {
                if(cb) cb(data)
            }
        ).catch(
            e => console.error(e)
        )
    }
}

export const switNavItem = (item) => {
  return {
    type: "switNavItem",
    data: item
  }
}

export default { switLan, dispSignBox, chkUsrSgi, setUsrIsSgi, setUsrInf, updUsrInf, getUsrInf, switNavItem }
