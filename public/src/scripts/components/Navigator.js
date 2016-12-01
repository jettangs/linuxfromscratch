import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'

import nav from '../../styles/navigator.css'
import content from '../../assets/content.json'
import comAction from '../actions/common'
import navAction from '../actions/navigator'

class Navigator extends Component{

  getLanIcon() {
    return this.props.language == 'en' ? "language-cn" : "language-en"
  }

  getItemStyle(item) {
    return this.props.actvNavIt == item ? "active" : "no-active"
  }

  componentWillMount() {
    this.props.switNavItem(this.props.actvNavIt)
  }

  lanIconClick() {
    this.props.switLan(this.props.language == 'en' ? 'cn' : 'en')
  }

  render() {
    let navItem = content[this.props.language].navItem
    let labels = ['home','projects','community','tutorials']
    let items = labels.map(
      //首次加载时会调用render方法 因此每个li会调用一次getItemStyle，之后每当其中一个li被点击后会导致重绘，因此所有的li都会调用一次getItemStyle
      (item,index) => <li key={item} className={this.getItemStyle(item)}><Link to={'/'+item}>{navItem[index]}</Link></li>
    )

    return (
      <div className="navigator">
        <div className="left">
          <img className="logo" src="../../assets/lfs-logo.png"/>
          <span className="nav-title">LFS</span>
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

const mapStateToProps = (state)=>{
    return {
      language: state.common.language,
      actvNavIt: state.navigator.actvNavIt,
    }
}

const mapDispatchToProps = {
    switLan : (lan) => comAction.switLan(lan),
    switNavItem: (item) => navAction.switNavItem(item)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator)
