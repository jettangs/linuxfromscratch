import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import styles from './index.css'
import comAction from '../../actions/common'

class Profile extends Component{

  render() {
    return (
      <div style="profile">
        <div style="header">
          <img style="head-img" src="./assets/profile-head.png"/>
          <div style="infor">
            <div style="infor-top">
              <span style="name">
                Jettangs
              </span>
              <span style="lv">
                Lv.18
              </span>
            </div>
            <div style="signature">
              最怕脑子不好使
            </div>
          </div>
        </div>
        <div style="bottom">
          <span style="circles">
            <i style="weibo-icon"></i>
            <i style="github-icon"></i>
          </span>
          <i style="locat-icon"></i>
          <span style="label"></span>
          <i style="agreen-icon"></i>
          <span style="label"></span>
          <i style="gold-icon"></i>
          <span style="label"></span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,prop)=>{
    return {
      // usrIsSgi: state.common.usrIsSgi
    }
}

const mapDispatchToProps = {
    setUsrIsSgi : (val) => comAction.setUsrIsSgi(val),
    dispSignBox: (bool) => comAction.dispSignBox(bool),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Profile,styles))