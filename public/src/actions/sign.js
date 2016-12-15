const signup = (data,cb) => {
    return (dispatch) => {
        fetch("user",{ 
            method:"POST",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:"username="+data.username+"&password="+data.password+"&email="+data.email
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

const signin = (data,cb) => {
    return (dispatch) => {
        let name;
        if(data.username) {
            name = "username="+data.username
        }else if(data.email) {
            name = "email="+data.email
        }
        fetch("session",{ 
            method:"POST",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },
            //只有设置了cookies后台才能保存user信息到session
            credentials: 'include',
            body:name+"&password="+data.password
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



export default {signup, signin}