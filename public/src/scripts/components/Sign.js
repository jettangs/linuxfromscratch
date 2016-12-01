import React, { Component } from 'react'
import { render } from 'react-dom'
import {connect} from 'react-redux'

import sgStyle from '../../styles/sign.css'
import signAction from '../actions/sign'
import comAction from '../actions/common'

class Sign extends Component{

    state = {passwdEmail:"password",signWay:"signin"}
    
    close() {
        this.props.closeSignBox()
    }

    dispUsnaHod(str) {
        this.refs.usernameInput.placeholder = str
    }

    dispPwdEmHod(str) {
        this.refs.passwdEmailInput.placeholder = str
    }

    clnUsna(){
        this.username = undefined
    }

    clnSgiEm(){
        this.signInEmail = undefined
    }

    getUsnaInp() {
        return this.refs.usernameInput.value
    }

    getPwdEmInp() {
        return this.refs.passwdEmailInput.value
    }

    setUsnaInp(val) {
        this.refs.usernameInput.value = val
    }

    setPwdEmInp(val) {
        this.refs.passwdEmailInput.value = val
    }

    sgiCb(lbl,val) {
        return (data) => {
            if(data.code != 10000) {
                if(data.code == 10002) {
                    this.setUsnaInp("")
                    this.dispUsnaHod(lbl + " not existed")
                }else if(data.code == 10005) {
                    this.setPwdEmInp("")
                    this.dispPwdEmHod("password incorrect")
                }
                setTimeout(() => {
                    if(data.code == 10002) {
                        console.log(val)
                        this.setUsnaInp(val)
                        this.dispUsnaHod(lbl + " not null")
                    }else if (data.code == 10005) {
                        this.setPwdEmInp(this.password)
                        this.dispPwdEmHod("password not null")
                    }
                },1000)
            }else {
                this.props.setUsrIsSgi(true)
                this.close()
            }
        }
    }

    sguCb() {
        return (data) => {
            if(data.code != 10000) {
                if(data.code == 10007) {
                    this.setUsnaInp("")
                    this.dispUsnaHod("username already existed")
                }else if(data.code == 10010) {
                    this.setUsnaInp("")
                    this.dispUsnaHod("username invaild")
                }else if(data.code == 10008) {
                    this.actv(this.refs.emailLabel,this.refs.pwdLabel, "email")
                    this.dispPwdEmHod("email already existed")
                }else if(data.code == 10009) {
                    this.actv(this.refs.emailLabel,this.refs.pwdLabel, "email")
                    this.dispPwdEmHod("email invaild") 
                }else if(data.code == 10011) {
                    this.actv(this.refs.pwdLabel,this.refs.emailLabel, "password")
                    this.dispPwdEmHod("password invaild") 
                }
                setTimeout(() => {
                    if(data.code == 10007 || data.code == 10010) {
                        this.setUsnaInp(this.username)
                        this.dispUsnaHod("username not null")
                    }else if (data.code == 10008 || data.code == 10009) {
                        this.setPwdEmInp(this.signUpEmail)
                        this.dispPwdEmHod("email not null")
                    }else if (data.code == 10011) {
                        this.setPwdEmInp(this.password)
                        this.dispPwdEmHod("password not null")
                    }
                },1000)
            }else {
                this.props.signin({
                    username: data.user.username,
                    password: data.user.password
                },()=> {
                    this.props.setUsrIsSgi(true)
                    this.close()
                })
            }
        }
    }

    //调用this.refs.pwdLabel.click()方法会导致执行流程异常
    actv(sel,nosel,lbl) {
        sel.className = "select"
        nosel.className = "no-select"
        this.setPwdEmInp("")
        
        this.setState({passwdEmail: lbl})
    }

    submit(signWay) {

        if(this.getUsnaInp().indexOf('@') >= 0) {
            this.clnUsna()
            this.signInEmail = this.getUsnaInp()
        }else {
            
            this.clnSgiEm()
            this.username = this.getUsnaInp()
        }

        if(!this.username && !this.signInEmail) {
            if(!this.username) {
                this.dispUsnaHod("username not null") 
            }else if(!this.signInEmail){
                this.dispUsnaHod("email not null") 
            }
        }

        if(signWay == "signin") {
            this.password = this.getPwdEmInp()
            console.log(this.username)
            console.log(this.signInEmail)
            console.log(this.password)
            
            if(!this.getPwdEmInp()) {
                this.dispPwdEmHod("password not null")
            }
            if((this.username || this.signInEmail) && this.password) {
                if(this.username) {  
                    this.clnSgiEm()
                    this.props.signin({
                        username:this.username,
                        password:this.password
                    },this.sgiCb("username",this.username))
                } else if(this.signInEmail) {
                    
                    this.clnUsna()
                    this.props.signin({
                        email:this.signInEmail,
                        password:this.password
                    },this.sgiCb("email",this.signInEmail))
                }
            } 
        } else {

            if(this.state.passwdEmail == "email") {
                
                this.signUpEmail = this.getPwdEmInp()
            }else {
                this.password = this.getPwdEmInp()
            }
            
            if(!this.password) {
                this.actv(this.refs.pwdLabel,this.refs.emailLabel,"password")
                this.dispPwdEmHod("password not null")
            } else if (!this.signUpEmail) {
                this.actv(this.refs.emailLabel,this.refs.pwdLabel,"email")
                this.dispPwdEmHod("email not null")
            }
                
            if(this.username && this.password && this.signUpEmail)
                this.props.signup({
                    username:this.username,password:this.password,email:this.signUpEmail
                },this.sguCb())
        }
    }
    switSignWay() {
        this.dispPwdEmHod("")
        this.dispUsnaHod("")
        this.setState({signWay:this.state.signWay == "signin"? "signup" : "signin"})
    }
    switPwdOrEmail(type) {
        this.setState({passwdEmail:type})
        this.dispPwdEmHod("")
        if(type=="password") {
            this.signUpEmail = this.getPwdEmInp()
            this.setPwdEmInp(this.password)
        }else {
            this.password = this.getPwdEmInp()
            this.setPwdEmInp(this.signUpEmail == undefined ? "" : this.signUpEmail)
        }
    }
    
    render() {
        let signWay = this.state.signWay
        return (
            <div className="sign">
                <div onClick={this.close.bind(this)} className="close"></div>
                <div className="content">
                    <div className="sign-in-up">
                        {signWay=="signin" ? "Sign in" : "Sign up"}
                    </div>
                    <div className="username">
                        Username 
                        <span>{signWay=="signin" ? " or email address" : ""} </span>
                    </div>
                    <div className="inputUsername">
                        <input ref="usernameInput" type="text"/>
                    </div>
                    <div className={signWay=="signin" ? "password" : "password-pointer"}>
                        <span ref="pwdLabel" onClick={this.switPwdOrEmail.bind(this,"password")} className={this.state.passwdEmail == "password"? "select" : "no-select"}>Password</span>
                        <span>{signWay=="signin" ? "" : " / "}</span>
                        <span ref="emailLabel" onClick={this.switPwdOrEmail.bind(this,"email")} className={this.state.passwdEmail == "email"? "select" : "no-select"}>{signWay == "signup" ? "Email" : ""} </span>
                    </div>
                    <div className="inputPassword">
                        <input ref="passwdEmailInput" type={this.state.passwdEmail == "password"? "password" : "text"}/>
                    </div>
                    <div onClick={this.switSignWay.bind(this)} className="otherSignWay">
                        {signWay=="signin" ? "Sign up" : "Sign in"}
                    </div>
                    <div onClick={this.submit.bind(this,signWay)} className="submit">
                        OK
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      
    }
}

const mapDispatchToProps = {
    signup : (data,cb) => signAction.signup(data,cb),
    signin : (data,cb) => signAction.signin(data,cb),
    setUsrIsSgi : (val) => comAction.setUsrIsSgi(val),
    closeSignBox: () => comAction.dispSignBox(false),
    getUsrInf : () => comAction.getUsrInf()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sign)