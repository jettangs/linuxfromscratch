import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactRouter, {Router, Route, Link, IndexRedirect, useRouterHistory, hashHistory, history } from 'react-router'
import { createHashHistory } from 'history'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import global from '../../global/styles/main.css'
import styles from './index.css'
import comAction from '../../actions/common'

import Navigator from '../Navigator'
import Sign from '../Sign'
import SideBar from '../SideBar'
import { chkURLToHomeAndSign } from '../../global/scripts/setting'

class App extends Component {

  componentDidMount() {
    this.props.chkUsrSgi(data => {
      this.props.setUsrIsSgi(data.code == 10000)
    })

    if(!this.props.usrIsSgi && chkURLToHomeAndSign(this.props.location.pathname)){
      window.location.replace('#/home')
      this.props.dispSignBox(true)
    }
  }

  render() {
    return (
      <div>
        {this.props.signBoxIsDisp && <Sign/>}
        {this.props.usrIsSgi && <SideBar/>}
        <Navigator/>
        <div style="children">
          {this.props.children}
        </div>
      </div> 
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      signBoxIsDisp:state.common.signBoxIsDisp,
      actvNavIt: state.common.actvNavIt,
      usrIsSgi: state.common.usrIsSgi 
    }
}

const mapDispatchToProps = {
   dispSignBox: (bool) => comAction.dispSignBox(bool),
   chkUsrSgi : (cb) => comAction.chkUsrSgi(cb),
   setUsrIsSgi : (bool) => comAction.setUsrIsSgi(bool)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(App,styles))