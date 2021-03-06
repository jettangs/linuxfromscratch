import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import styles from '../../styles/sideBar.css'
import comAction from '../actions/common'

class SideBar extends Component {

  sgoClk(){
     this.props.setUsrIsSgi(false)
  }

  chkUsrSgi(nextState,replace) {
    this.props.getUsrInf(data=>{
      if(data.code==10002){
       // this.dispSignBox(true)
        //this.props.setUsrIsSgi(false)
        return
      }
    })
  }

  render() {

    return (
      // <div className=>
       // <ul>
       <div style="sideBar">
          <Link to='/profile' style="profile" onClick={this.chkUsrSgi.bind(this)}></Link>
          <Link to='/newPost' style="post" onClick={this.chkUsrSgi.bind(this)}></Link>
          <Link to='/message' style="message" onClick={this.chkUsrSgi.bind(this)}></Link>
          <div style='logout' onClick={this.sgoClk.bind(this)}></div>
       </div>
       // </ul>
     // </div> 
    )
  }
}

const mapStateToProps = (state)=>{
    return {

    }
}

const mapDispatchToProps = {
   getUsrInf : () => comAction.getUsrInf(),
   dispSignBox : (bool) => comAction.dispSignBox(bool),
   setUsrIsSgi : (bool) => comAction.setUsrIsSgi(bool)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(SideBar,styles))