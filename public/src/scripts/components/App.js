import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactRouter, {Router, Route, Link, IndexRedirect, useRouterHistory, hashHistory, history } from 'react-router'
import { createHashHistory } from 'history'
import {connect} from 'react-redux'

import main from '../../styles/main.css'
import app from '../../styles/app.css'
import icon from '../../styles/icon.css'
import navAction from '../actions/navigator'

import Navigator from './Navigator'
import Sign from './Sign'
import SideBar from './SideBar'

// export default ({ children }) => {
//     return (
//       <div>
//         <Navigator></Navigator>
//         {children}
//       </div>
//     )
// }
class App extends Component {

  componentDidMount() {
    //激活对应的navigator item
    let pana = this.props.location.pathname
    pana = pana.substr(1,pana.length)
    //处理类似http://localhost:3000/#/community/posting/b1c98675-8b29-4的情况
    if(pana.indexOf('/') >= 0) pana = pana.substr(0,pana.indexOf('/'))
    this.props.switNavItem(pana)
  }
  
  componentWillReceiveProps({ location }) {
    let pana = location.pathname
    console.log(pana)
    if(pana.indexOf("home") >= 0) {
      this.props.switNavItem("home")
    }else if(pana.indexOf("projects") >= 0) {
      this.props.switNavItem("projects")
    }else if(pana.indexOf("community") >= 0) {
      this.props.switNavItem("community")
    }else if(pana.indexOf("tutorials") >= 0) {
      this.props.switNavItem("tutorials")
    } 
  }

  render() {
    return (
      <div>
        {this.props.dispSignBox && <Sign/>}
        <SideBar/>
        <Navigator/>
        <div className="app-children">
          {this.props.children}
        </div>
      </div> 
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      dispSignBox:state.common.dispSignBox,
      actvNavIt: state.navigator.actvNavIt
      
    }
}

const mapDispatchToProps = {
   switNavItem: (item) => navAction.switNavItem(item)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)