import React, { Component } from 'react'
import ReactDOM,{ findDOMNode } from 'react-dom'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import posting from '../../assets/jsons/postings/b1c98675-8b29-481e-8b94-a86ef15ed8cc.json'
import reply from '../../assets/jsons/community/reply.json'
import styles from './index.css'
import comAction from '../../actions/common'
import dom from '../../global/scripts/plugins/dom'

class Posting extends Component{

  getUsrnamRe(id){
    let author
    reply.map(
      item => {
        if(item._id==id) author = item.author
      }
    )
    return author
  }

  favIcoClk(cmtUid) {
    //this.props.setUsrIsSgi(true)
    this.props.chkUsrSgi(
      data => {
        if(data.code == 10000) {
          console.log(cmtUid)
        } else {
          this.props.dispSignBox(true)
        }
      }
    )
  }

  reIcoClk(cmtUid) {
    //this.props.setUsrIsSgi(true)
    this.props.chkUsrSgi(
      data => {
        if(data.code == 10000) {
          console.log(cmtUid)
        } else {
          this.props.dispSignBox(true)
        }
      }
    )
  }

  pstSco() {
    
  }

  wheel() {

  }

  render() {
    let replyList = reply.map(
    (item,index) => {
      let replyPrefix = "";
      if(item.ref != posting.id){
        replyPrefix = "@"+this.getUsrnamRe(item.ref)+" "
      }
      return (
          <div style={"item"} key={item._id}>
          <div style="head-img">
            <img src={item.head_img}/>
          </div>
          <div style="right">
            <div style="top">
              <span style="author">
                {item.author}
              </span>
              <span style="date">
                replied {item.date.substr(0,item.date.indexOf(' '))}
              </span>
              <span style="right-items">
                <div onClick={this.reIcoClk.bind(this,item._id)} style="reply"></div>
                <div onClick={this.favIcoClk.bind(this,item._id)} style="like"></div>
                <div style="floor">
                  #{index+2}
                </div>
              </span>
            </div>
            <div style="content">
              <span style="replyPrefix">{replyPrefix}</span>
              <span>{item.content}</span>
            </div>
          </div>
        </div>
        )
      }
    )

    return (
      <div style="post-frame" onWheel={this.pstSco.bind(this)}>
        <div style="post-body">
          <div style="post-info">
            <div style="head-img">
              <img src={posting.head_img}/>
            </div>
            <div style="right">
              <div style="title">
                {posting.title}
              </div>
              <div style="buttom"> 
                <span style="author">
                  {posting.author}
                </span>
                <span style="date">
                  asked {posting.date.substr(0,posting.date.indexOf(' '))}
                </span>
                <span style="views">
                  views : {posting.views}
                </span>
                <span style="right-items">
                  <div style="reply"></div>
                  <div style="floor">
                    {"#1"}
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div style="post-content">
            {posting.content}
          </div>
          <div style="reply-list">
            {replyList}
          </div>
          <div style="reply-box">
            <textarea></textarea>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      
    }
}

const mapDispatchToProps = {
    dispSignBox : (data) => comAction.dispSignBox(data),
    chkUsrSgi : (cb) => comAction.chkUsrSgi(cb),
    getDomValue : (name, param) => comAction.getDomValue(name, param),
    setDomValue : (name, param, value) => comAction.setDomValue(name, param, value),
    setUsrIsSgi : (bool) => comAction.setUsrIsSgi(bool)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Posting,styles))



