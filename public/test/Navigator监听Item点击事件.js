import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'

import nav from '../../styles/nav.css'
import content from '../../assets/content.json'
import comAction from '../actions/common'
import navAction from '../actions/navigator'

class Navigator extends Component{

  getLanIcon() {
    return this.props.language == 'en' ? "language-cn" : "language-en"
  }

  getItemStyle(item) {
    console.log(this.props.actvNavIt)
    return this.props.actvNavIt == item ? "active" : "no-active"
  }

  componentWillReceiveProps({ location }) {
    //把location转换为对应的item 例如"/project"转换为"project"
    let navItem = location.substr(1)
    "home|projects|community|tutorials".indexOf(navItem) > 0 && this.props.switNavItem(navItem)
  }

  navItemClick(item) {
    this.props.switNavItem(item)
  }

  lanIconClick() {
    this.props.switLan(this.props.language == 'en' ? 'cn' : 'en')
  }

  render() {
    let navItem = content[this.props.language].navItem
    let labels = ['home','projects','community','tutorials']
    let items = labels.map(
      (item,index) => <li key={item} onClick={this.navItemClick.bind(this,item)}><Link className={this.getItemStyle(item)} to={item}>{navItem[index]}</Link></li>
    )

    return (
      <div className="main">
        <div className="left">
          <img className="logo" src="../../assets/lfs-logo.png"/>
          <span className="title">LFS</span>
        </div>
        <div className="right">
          <ul>
              {items}
          </ul>
          <i onClick={this.lanIconClick.bind(this)} className={this.getLanIcon()}></i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,prop)=>{
    return {
      language: state.common.language,
      actvNavIt: state.navigator.actvNavIt,
    }
}

const mapDispatchToProps = {
    switLan : (lan) => comAction.switLan(lan),
    switNavItem: (item) => navAction.switNavItem(item)
    //getUsrInf : comAction.getUsrInf()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator)
