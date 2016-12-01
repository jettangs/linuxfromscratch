import React, { Component } from 'react'
import { Link } from 'react-router'
import nav from '../../../styles/nav.css'
import content from '../../../jsons/content.json'

export default class Navigator extends Component{

  state = { activeItem: 'Home', language: 'cn'}

  itemClick = (i,item) => {
    this.setState({activeItem: item})
  }

  getStyle = (item) => {
    return this.state.activeItem == item ? "active" : "no-active"
  }

  switLan() {
    content.home.title = 'AAA'
    console.log(content.home.title)
    this.setState({language: this.state.language == 'en' ? 'cn' : 'en'})
  }

  getLanIcon() {
    return this.state.language == 'en' ? "language-en" : "language-cn"
  }

  render() {
    var labels = ['Home','Projects','Community','Tutorials']
    let items = labels.map(
      (item,index) => <li className={this.getStyle(item)} onClick={this.itemClick.bind(this, index, item)} key={item}><Link to={item.toLowerCase()}>{item}</Link></li>
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
          <i onClick={this.switLan.bind(this)} className={this.getLanIcon()}></i>
        </div>
      </div>
    )
  }
}