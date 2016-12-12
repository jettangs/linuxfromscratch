import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import style from '../../styles/home.css'
import content from '../../jsons/global.json'
import news from '../../jsons/home/news.json'
import tutorials from '../../jsons/home/tutorials.json'
import solutions from '../../jsons/home/solutions.json'

class Home extends React.Component{

  render() {
    let cont = content[this.props.language].home
    
    let newsList = news.map(
      (item,index) => {
        return (
          <li key={item._id} style="item">
            <Link style="item-title" to={{pathname:"/home/news/"+item._id}}>{item[this.props.language].title}</Link>
            <div style="item-author">{item.author}</div>
            <div style="item-date">{item.date.substr(0,10)}</div>
          </li>
        )
      }
    )

    let tutorialList = tutorials.map(
      (item,index) => {
        return (
          <li key={item._id} style="item">
            <Link style="item-title" to={{pathname:"/home/news/"+item._id}}>{item[this.props.language].title}</Link>
            <div style="item-author">{item.author}</div>
            <div style="item-date">{item.date.substr(0,10)}</div>
          </li>
        )
      }
    )

    let solutionList = solutions.map(
      (item,index) => {
        return (
          <li key={item._id} style="item">
            <Link style="item-title" to={{pathname:"/home/news/"+item._id}}>{item[this.props.language].title}</Link>
            <div style="item-author">{item.author}</div>
            <div style="item-date">{item.date.substr(0,10)}</div>
          </li>
        )
      }
    )
    return (
      <div style='home'>
          <div style='top'>
            <div style='title'>
              {cont.title}
            </div>
            <div style='content'>
              <span style='part'> {cont.p1} </span>
              <br/>
              <span style='part'> {cont.p2} </span>
              <span><Link style='link' to="/projects">{cont.p3}</Link></span>
              <span> {cont.p4} </span>
            </div>
          </div>
          <div style='buttom'>
            <div style='news'>
              <div style='news-title'>News</div>
              <div style='table'>
                <ul style='ul'>
                  {newsList}
                </ul>
              </div>
            </div>
            <div style='tutorials'>
              <div style='tutorials-title'>Tutorials</div>
              <div style='table'>
                <ul style='ul'>
                  {tutorialList}
                </ul>
              </div>
            </div>
            <div style='solutions'>
              <div style='solutions-title'>Solutions</div>
              <div style='table'>
                <ul style='ul'>
                  {solutionList}
                </ul>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state,prop)=>{
    return {
      language: state.common.language,
    }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Home,style))



