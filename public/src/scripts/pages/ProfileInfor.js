import React, { Component } from 'react'
import { Link } from 'react-router'
import profInSty from '../../styles/profileInfor.css'
import { connect } from 'react-redux'

class ProfileInfor extends Component{
  render() {
    return (
      <div className="profileInfor">
        ProfileInfor
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
    //switLan : (lan) => navAction.switLan(lan),
    //switNavItem: (item) => navAction.switNavItem(item)
    //getUsrInf : comAction.getUsrInf()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfor)