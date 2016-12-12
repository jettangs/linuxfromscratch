import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import styles from './index.css'
import postings from '../../assets/jsons/community/posting.json'
import comAction from '../../actions/common'

class Community extends Component{

  componentDidMount() {

    // this.props.getUsrInf(data => {
    //   this.props.setUsrIsSgi(data.code == 10000? true : false)
    // })
  }

  render() {
    let postingList = postings.map(
      posting => <div key={posting._id} style="row">
            <Link style="post-title" to={{pathname:"/community/posting/"+posting._id}}>
              {posting.title} 
            </Link>
            <div style="post-buttom">
              <span style="solve">solve</span> 
              <span style="help">help</span>
              <span style="answers-views">{posting.answers}/{posting.views}</span>
              <span style="author">{posting.author}</span>
            </div>
          </div>
    )

    return (
      <div style="community">
        <div style="postList">
          {postingList}
        </div>
        <div style="postContent" ref="postContent">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      usrIsSgi: state.common.usrIsSgi 
    }
}

const mapDispatchToProps = {
    dispSignBox : (dat) => comAction.dispSignBox(dat),
    getUsrInf : (cb) => comAction.getUsrInf(cb),
    setUsrIsSgi : (val) => comAction.setUsrIsSgi(val),
    setUsrInf : (dat) => comAction.setUsrInf(dat)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Community,styles))