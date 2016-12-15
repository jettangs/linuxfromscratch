import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import styles from './index.css'
import postings from '../../assets/jsons/community/posting.json'
import comAction from '../../actions/common'

class Community extends Component{

  componentDidMount() {
    this.props.switNavItem('community')
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
    switNavItem: (item) => comAction.switNavItem(item)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Community,styles))