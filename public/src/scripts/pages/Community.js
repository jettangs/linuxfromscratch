import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'

import ctStyle from '../../styles/community.css'
import postings from '../../jsons/posting.json'
import comAction from '../actions/common'

class Community extends Component{

  getPostListSty() {
    return this.props.usrIsSgi == true ? "postList-part-left" : "postList-all-left"
  }

  componentDidMount() {
    this.props.getUsrInf(data => {
      this.props.setUsrIsSgi(data.code == 10000? true : false)
    })
  }

  render() {
    let postingList = postings.map(
      posting => <div className={"row"} key={posting.id}>
            <div className="post-title">
              <Link to={{pathname:"/community/posting/"+posting.id}}>
                {posting.title} 
              </Link>
            </div>
            <div className="post-buttom">
              <span className="solve">solve</span> 
              <span className="help">help</span>
              <span className="answers-views">{posting.answers}/{posting.views}</span>
              <span className="author">{posting.author}</span>
            </div>
          </div>
    )

    return (
      <div className="community">
        <div className={this.getPostListSty()}>
          {postingList}
        </div>
        <div className="postContent" ref="postContent">
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
)(Community)