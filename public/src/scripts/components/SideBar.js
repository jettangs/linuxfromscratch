import React, { Component } from 'react'
import { render } from 'react-dom'
import {connect} from 'react-redux'
import sideBarSty from '../../styles/sideBar.css'
import { Link } from 'react-router'
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
      <div className="sideBar">
        <ul>
          <Link to='/profile' onEnter={this.chkUsrSgi()}><li><i className='userInfo'></i></li></Link>
          <Link to='/newPost' onEnter={this.chkUsrSgi()}><li><i className='newPost'></i></li></Link>
          <Link to='/message' onEnter={this.chkUsrSgi()}><li><i className='message'></i></li></Link>
          <li onClick={this.sgoClk.bind(this)}><i className='logout'></i></li>
        </ul>
      </div> 
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
)(SideBar)