import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import styles from './index.css'
import comAction from '../../actions/common'
import { vldUsna, vldPwd, vldEm } from '../../global/scripts/plugins/validator'


class Profile extends Component{

  state={sig:'Happy', sigInpIsDisp: false, em:'625436194@163.com', emDispStr:'625436194@163.com', emInpIsDisp: false, pwdInpIsDisp:false, pwdBtnIsClk:false, 
  ogPwdIsInp:false, cir:'', cirInpIsDisp:false, cirWeiboDelBtnIsDisp:false, cirGithubDelBtnIsDisp:false}

  bgChg() {
    console.log("bgChg")
  }

  setInpFoc(inp, val, text) {
    setTimeout(()=>{
      inp = this.refs[inp]
      inp.value = val
      inp.placeholder = text
      ReactDOM.findDOMNode(inp).focus()
    })
  }

  setInpDisp(inp, val, text, time=1000) {
    if(text) {
      inp.placeholder = text
      inp.value = ""
    }
    setTimeout(()=>{
      inp.value = val
      inp.placeholder = ""
      ReactDOM.findDOMNode(inp).focus()
    },time)
  }

  hideAllInp() {
    this.setState({pwdInpIsDisp: false, sigInpIsDisp: false, emInpIsDisp: false, cirInpIsDisp: false})
  }

/*---------------------------Signature------------------------*/ 

  sigWillChg() {
    this.hideAllInp();
    this.setState({sigInpIsDisp: true})
    //需要等到DOM操作完成后，所以这里需要适当的延时才能获得焦点 该时间是浏览器最短执行时间
    this.setInpFoc("sigInp",this.state.sig)
  }

  sigDidChg() {
    let sigInp = this.refs.sigInp
    let val = sigInp.value
    if(val.length > 10) {
      this.setInpDisp(sigInp, val, "too long")
      return
    }
    this.setState({sig:val, sigInpIsDisp: false})
  }

/*---------------------------Email------------------------*/ 

  emWillChg() {
    this.hideAllInp();
    this.setState({emInpIsDisp: true})
    this.setInpFoc("emInp", this.state.em)
  }

  emDidChg() {
    let emInp = this.refs.emInp
    let val = emInp.value
    let emDispStr = val
    if(!vldEm(val)) {
      this.setInpDisp(emInp, val, "not satisfiable")
      return
    }
    if(val.length > 20) {
      emDispStr = val.substr(0,18)
      emDispStr += "..."
    }
    this.setState({em:val, emDispStr: emDispStr, emInpIsDisp: false})
  }

/*---------------------------Password------------------------*/ 

  pwdWillChg() {
    this.hideAllInp();
    this.setState({pwdInpIsDisp: true})
    this.setInpFoc("pwdInp", this.state.em, "your original password")
  }

//此时会调用两次 原来密码 和 新密码
  pwdCfmBtnClk() {
    this.setState({pwdBtnIsClk:true})
    let pwdInp = this.refs.pwdInp
    let val = pwdInp.value
    if(!this.state.ogPwdIsInp) {
      this.props.getUsrInf(data._id, (data)=>{
        if(data.code == 10000){
          this.props.setUsrInf({_id:data._id})
          if(data.user.password == val) {
            pwdInp.value = ""
            pwdInp.placeholder = "your new password"
            this.setState({ogPwdIsInp:true})
          }else{
            this.setInpDisp(pwdInp,val,"password is wrong")
          }
        }else{
          this.setInpDisp(pwdInp,val,"network error")
        }
      })
    }else{
      if(!vldPwd(val)) {
        this.setInpDisp(pwdInp,val,"not satisfiable")
      } else {
        this.props.updUsrInf(this.props.usrInf._id, (data)=> {
          if(data.code == 10000) {
            this.setState({usrInf:data,pwdInpIsDisp: false, ogPwdIsInp:false, pwdBtnIsClk: false})
          }else {
            this.setInpDisp(pwdInp,val,"network error")
          }
        })
      }
    }
  }

  pwdDidChg() {
    setTimeout(()=>{
      !this.state.pwdBtnIsClk && this.setState({pwdInpIsDisp: false})
    },130)
  }

/*---------------------------Circles------------------------*/ 

  cirWillAdd() {
    this.hideAllInp();
    this.setState({cirInpIsDisp: true})
    this.setInpFoc("cirInp", this.state.cir)
  }
  
  cirDidAdd() {
    let value = this.refs.cirInp.value
    this.setState({cir:value, cirInpIsDisp: false})
  }

  cirDel(val) {
    console.log(val)
  }

  dispDelBtn(val) {
    val == "weibo" && this.setState({cirWeiboDelBtnIsDisp: true})
    val == "github" && this.setState({cirGithubDelBtnIsDisp: true})
  }

  hideDelBtn(val) {
    val == "weibo" && this.setState({cirWeiboDelBtnIsDisp: false})
    val == "github" && this.setState({cirGithubDelBtnIsDisp: false})
  }

  // componentDidMount() {
  //   this.props.chkUsrSgi((data)=>{
  //     data.code == 10002 && this.props.dispSignBox(true)
  //   })
  // }

  render() {
    return (
      <div style="profile">
        <div style="header">
          <div style="bg-chg-icon" onClick={this.bgChg.bind(this)}></div>
          <div style="head-img-frm"> 
            <img style="head-img" src="./assets/profile-head.png"/>
          </div>
          <div style="lv">
            18
          </div>
          <div style="infor">
              <div style="name">
                Jettangs
              </div>
              <div style="circles">
                <i style="weibo-icon"></i>
                <i style="github-icon"></i>
              </div>
              <div style="sig">
                {!this.state.sigInpIsDisp && <span ref="sig" style="sig-val">{this.state.sig}</span>}
                {this.state.sigInpIsDisp && <input ref="sigInp" onBlur={this.sigDidChg.bind(this)} style="sig-inp" type="text"/>}
                {!this.state.sigInpIsDisp && <i ref="sigBtn" style="sig-chg-btn" onClick={this.sigWillChg.bind(this)}></i>}
              </div>
          </div>
        </div>
        <div style="bot">
          <div style="bot-inf">
            <div style="stuff">
              <i style="arg-icon"></i>
              <span style="label">26</span>
              <i style="gold-icon"></i>
              <span style="label">153</span>
            </div>
            <div style="vitality">
              <div style="following">
                <div style="vital-num">163</div>
                <div style="vital-lbl">Following</div>
              </div>
              <div style="followers">
                <div style="vital-num">121</div>
                <div style="vital-lbl">Followers</div>
              </div>
              <div style="postings">
                <div style="vital-num">103</div>
                <div style="vital-lbl">Postings</div>
              </div>
            </div>
          </div>
          <div style="bot-set">
            <div style="set-exp">
              <div style="exp-lbl">Experience</div>
              <div style="exp-lv-start">Lv.18</div>
              <div style="exp-lv-end">Lv.19</div>
              <div style="exp-bar">
                <div style="exp-val"></div>
              </div>
              <div style="cln"></div>
            </div>
            <div style="set-em">
              <div style="em-lbl">Email</div>
              {!this.state.emInpIsDisp && <div style="em-val">{this.state.emDispStr}</div>}
              {this.state.emInpIsDisp && <input ref="emInp" onBlur={this.emDidChg.bind(this)} style="em-inp" type="text"/>}
              {!this.state.emInpIsDisp && <div style="em-chg-btn" onClick={this.emWillChg.bind(this)}></div>}
              <div style="cln"></div>
            </div>
            <div style="set-pwd">
              <div style="pwd-lbl">Password</div>
              {this.state.pwdInpIsDisp && <input ref="pwdInp" onBlur={this.pwdDidChg.bind(this)} style="pwd-inp" type="password"/>}
              {this.state.pwdInpIsDisp && <div style="pwd-ok-btn" onClick={this.pwdCfmBtnClk.bind(this)}></div>}
              {!this.state.pwdInpIsDisp && <div style="pwd-chg-btn" onClick={this.pwdWillChg.bind(this)}></div>}
              <div style="cln"></div>
            </div>
            <div style="set-cir">
              <div style="cir-lbl">Circles</div>
              <div style="cir-val">
                <div style="cir-weibo" onMouseOver={this.dispDelBtn.bind(this,"weibo")} onMouseOut={this.hideDelBtn.bind(this,"weibo")}></div>
                {this.state.cirWeiboDelBtnIsDisp && <div style="cir-weibo-del-btn-shim"></div>}
                {this.state.cirWeiboDelBtnIsDisp && <div style="cir-weibo-del-btn" onMouseOver={this.dispDelBtn.bind(this,"weibo")} onClick={this.cirDel.bind(this,"weibo")}></div>}
                <div style="cir-github" onMouseOver={this.dispDelBtn.bind(this,"github")} onMouseOut={this.hideDelBtn.bind(this,"github")}></div>
                {this.state.cirGithubDelBtnIsDisp && <div style="cir-github-del-btn-shim"></div>}
                {this.state.cirGithubDelBtnIsDisp && <div style="cir-github-del-btn" onMouseOver={this.dispDelBtn.bind(this,"github")} onClick={this.cirDel.bind(this,"weibo")}></div>}
              </div>
              <div style="cir-add" onClick={this.cirWillAdd.bind(this)}></div>
              {this.state.cirInpIsDisp && <input ref="cirInp" onBlur={this.cirDidAdd.bind(this)} style="cir-inp" type="text"/>}
              <div style="cln"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,prop)=>{
    return {
       usrInf: state.common.usrInf
    }
}

const mapDispatchToProps = {
    setUsrInf : (val) => comAction.setUsrInf(val),
    setUsrIsSgi : (val) => comAction.setUsrIsSgi(val),
    chkUsrSgi : (cb) => comAction.chkUsrSgi(cb),
    dispSignBox: (bool) => comAction.dispSignBox(bool),
    updUsrInf: (dat,cb) => comAction.updUsrInf(dat,cb),
    getUsrInf: (id,cb) => comAction.getUsrInf(id,cb)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Profile,styles))