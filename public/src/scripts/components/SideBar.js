import React, { Component } from 'react'
import { render } from 'react-dom'
import {connect} from 'react-redux'
import sideBarSty from '../../styles/sideBar.css'

class SideBar extends Component {

  sidBarItClk(it) {

  }

  getSidBarSty() {
    //return this.props.usrIsSgi == true ? "sideBar-disp" : "sideBar-hide"
    return "sideBar"
  }

  render() {

   let labels = ['userInfo','newPost','message','logout']
   // let links = ['user','posting','message','session']
    let items = labels.map(
      (item,index) => {
        return  <li key={item} onClick={this.sidBarItClk.bind(this,item)}><i className={item}></i></li>
      }
    )
    return (
      <div className={this.getSidBarSty()}>
        <ul>
          {items}
        </ul>
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
)(SideBar)