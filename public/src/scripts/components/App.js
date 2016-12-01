import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactRouter, {Router, Route, Link, IndexRedirect, useRouterHistory, hashHistory, history } from 'react-router'
import { createHashHistory } from 'history'
import {connect} from 'react-redux'

import main from '../../styles/main.css'
import icon from '../../styles/icon.css'
import navAction from '../actions/navigator'

import Navigator from './Navigator'
import Sign from './Sign'
import SidBarInd from './SidBarInd'
import SidBar from './SidBar'

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
    let navit = location.pathname.substr(1,location.length)
    this.props.actvNavIt != navit && "home|projects|community|tutorials".indexOf(navit) >= 0 && this.props.switNavItem(navit)
  }

  render() {
    return (
      <div>
        {this.props.dispSignBox && <Sign/>}
        {<SidBarInd/>}
        {<SidBar/>}
        <Navigator/>
        {this.props.children}
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