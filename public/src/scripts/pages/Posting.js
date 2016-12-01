import React, { Component } from 'react'
import ReactDOM,{ findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import posting from '../../jsons/postings/b1c98675-8b29-481e-8b94-a86ef15ed8cc.json'
import reply from '../../jsons/reply.json'
import postStyle from '../../styles/posting.css'
import comAction from '../actions/common'
import dom from '../../plugins/dom'
import {connect} from 'react-redux'

class Posting extends Component{


  getUsrnamRe(id){
    let author
    reply.map(
      item => {
        if(item.id==id) author = item.author
      }
    )
    return author
  }

  pstSco(dd) {

    let ptFrm = dom.getNode('.post-frame')[0],
        scoBar = dom.getDom('scrollBar')[0],
        scoBarCtnr = dom.getDom('scrollBarContainer')[0]

    let ptScoTop = ptFrm.scrollTop
    let ptHt =  ptFrm.offsetHeight
    let ptScoHt = ptFrm.scrollHeight

    console.log(ptScoTop)

    let rat = ptHt / ptScoHt
    let scoBarTop = parseInt(ptScoTop * rat) + "px"
    scoBarCtnr.className = "scrollBarContainer"
    scoBar.style.top = scoBarTop
    
    setTimeout(()=>{
      scoBarCtnr.className = "scrollBarContainer animated"
    },500)
  }

  favIcoClk(cmtUid) {
    
    this.props.getUsrInf(
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
    this.props.getUsrInf(
      data => {
        if(data.code == 10000) {
          console.log(cmtUid)
        } else {
          this.props.dispSignBox(true)
        }
      }
    )
  }



  componentDidMount() {
    // var style = document.createElement('style')
    // document.head.insertBefore(style, document.head.childNodes[0]);
    //ReactDOM.findDOMNode(this.refs.postFrame)

    //dom.setDomValue(".post-frame","padding","5px")
   // dom.getDomValue(".post-frame","hight")
   
    let ptFrm = dom.getNode('.post-frame')[0]
    let scoBar = dom.getDom('scrollBar')[0]
    
    let ptHt =  ptFrm.offsetHeight
    let ptScoHt = ptFrm.scrollHeight
    if(ptHt < ptScoHt) {
      let rat = ptHt / ptScoHt
      let scoBarHt = parseInt(ptHt * rat) + "px"
      console.log(scoBarHt)
      scoBar.style.height = scoBarHt
    }
  }
  wheel() {
    let element = document.querySelectorAll('.wapper')[0];
    console.log(element.scrollTop)
  }
  render() {
    let replyList = reply.map(
    (item,index) => {
      let replyPrefix = "";
      if(item.ref != posting.id){
        replyPrefix = "@"+this.getUsrnamRe(item.ref)+" "
      }
      return (
          <div className={"item"} key={item.id}>
          <div className="hend-img">
            <img src={item.head_img}/>
          </div>
          <div className="right">
            <div className="top">
              <span className="author">
                {item.author}
              </span>
              <span className="date">
                replied {item.date.substr(0,item.date.indexOf(' '))}
              </span>
              <span className="right-items">
                <div onClick={this.reIcoClk.bind(this,item.id)} className="reply"></div>
                <div onClick={this.favIcoClk.bind(this,item.id)} className="like"></div>
                <div className="floor">
                  #{index+2}
                </div>
              </span>
            </div>
            <div className="content">
              <span className="replyPrefix">{replyPrefix}</span>
              <span>{item.content}</span>
            </div>
          </div>
        </div>
        )
      }
    )

    return (
      <div>
          <div className="post-frame" onWheel={this.pstSco.bind(this)}>
            <div className="post-body">
              <div className="post-info">
                <div className="head-img">
                  <img src={posting.head_img}/>
                </div>
                <div className="right">
                  <div className="title">
                    {posting.title}
                  </div>
                  <div className="buttom"> 
                    <span className="author">
                      {posting.author}
                    </span>
                    <span className="date">
                      asked {posting.date.substr(0,posting.date.indexOf(' '))}
                    </span>
                    <span className="views">
                      views : {posting.views}
                    </span>
                    <span className="right-items">
                      <div className="reply"></div>
                      <div className="floor">
                        {"#1"}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-content">
                {posting.content}
              </div>
              <div className="reply-list">
                {replyList}
              </div>
              <div className="reply-box">
                <textarea></textarea>
              </div>
            </div>
          </div>
          <div className="scrollBarContainer animated">
            <div className="scrollBar"></div>
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
    getUsrInf : (cb) => comAction.getUsrInf(cb),
    getDomValue : (name, param) => comAction.getDomValue(name, param),
    setDomValue : (name, param, value) => comAction.setDomValue(name, param, value)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posting)



