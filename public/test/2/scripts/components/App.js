import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactRouter, {Router, Route, Link, IndexRedirect, useRouterHistory, hashHistory, history } from 'react-router'
import { createHashHistory } from 'history'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import global from '../../styles/global.css'
import style from '../../styles/app.css'
import navAction from '../actions/navigator'
import comAction from '../actions/common'

import Navigator from './Navigator'
import Sign from './Sign'
import SideBar from './SideBar'


class App extends Component {

  componentDidMount() {
    //window.history.length == 8

    //激活对应的navigator item
    let pana = this.props.location.pathname

    if(!this.props.usrIsSgi && pana.indexOf('profile') >= 0){
      window.location.replace('#/home')
      console.log(pana.indexOf('profile'))
      this.props.dispSignBox(true)
      return
    }
    pana = pana.substr(1,pana.length)
    //处理类似http://localhost:3000/#/community/posting/b1c98675-8b29-4的情况
    if(pana.indexOf('/') >= 0) pana = pana.substr(0,pana.indexOf('/'))
    this.props.switNavItem(pana)
  }
  
  componentWillReceiveProps({ location },nextProps) {
    let pana = location.pathname
    if(pana.indexOf("home") >= 0) {
      this.props.switNavItem("home")
    }else if(pana.indexOf("projects") >= 0) {
      this.props.switNavItem("projects")
    }else if(pana.indexOf("community") >= 0) {
      this.props.switNavItem("community")
    }else if(pana.indexOf("tutorials") >= 0) {
      this.props.switNavItem("tutorials")
    }else {
      this.props.switNavItem(null)
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
      actvNavIt: state.navigator.actvNavIt,
      usrIsSgi: state.common.usrIsSgi 
    }
}

const mapDispatchToProps = {
   switNavItem: (item) => navAction.switNavItem(item),
   dispSignBox: (bool) => comAction.dispSignBox(bool)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(App,style))