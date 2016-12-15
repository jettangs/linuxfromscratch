import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import styles from './index.css'
import content from '../../assets/jsons/global.json'
import comAction from '../../actions/common'

class Navigator extends Component{

  getLanIcon() {
    return this.props.language == 'en' ? "lan-cn" : "lan-en"
  }

  getItemStyle(item) {
    return this.props.actvNavIt == item ? "nav-active" : "nav-no-active"
  }

  componentWillMount() {
    this.props.switNavItem(this.props.actvNavIt)
  }

  lanIconClick() {
    this.props.switLan(this.props.language == 'en' ? 'cn' : 'en')
  }

  menuIconClick() {
    console.log("menuIconClick")
  }

  render() {
    let navItem = content[this.props.language].navItem
    let labels = ['home','projects','community','tutorials']
    let items = labels.map(
      //首次加载时会调用render方法 因此每个li会调用一次getItemStyle，之后每当其中一个li被点击后会导致重绘，因此所有的li都会调用一次getItemStyle
      (item,index) => <div key={item} style={'navItem'}><li style={this.getItemStyle(item)}><Link style="link" to={'/'+item}>{navItem[index]}</Link></li></div>
    )

    return (
      <div style="navigator">
        <div style="logo-title">
          <img style="logo" src="./assets/lfs-logo.png"/>
          <span style="title">LFS</span>
        </div>
        <div style="menu">
          <ul style="ul">
              {items}
          </ul>
          <i onClick={this.lanIconClick.bind(this)} style={this.getLanIcon()}></i>
        </div>
        <i onClick={this.menuIconClick.bind(this)} style="menu-button"></i>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      language: state.common.language,
      actvNavIt: state.common.actvNavIt,
    }
}

const mapDispatchToProps = {
    switLan : (lan) => comAction.switLan(lan),
    switNavItem: (item) => comAction.switNavItem(item)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Navigator, styles))
