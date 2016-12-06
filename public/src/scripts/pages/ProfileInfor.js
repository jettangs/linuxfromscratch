import React, { Component } from 'react'
import { Link } from 'react-router'
import sty from '../../styles/profileInfor'
import stycss from '../../styles/profileInfor.css'
import { connect } from 'react-redux'

class ProfileInfor extends Component{
  render() {
    return (
      <div className="profileInfor" style={sty.body}>
        <div style={sty.row}>
          <span style={sty.lbl}>Username</span>
          <span style={sty.text}>jettang</span>
        </div>
        <div style={sty.row}>
          <span style={sty.lbl}>Password</span>
          <span style={sty.link}>Change</span>
        </div>
        <div style={sty.row}>
          <span style={sty.lbl}>Email</span>
          <span style={sty.text}>625436194@163.com</span>
        </div>
        <div style={sty.row}>
          <span style={sty.lbl}>Circles</span>
          <span style={sty.text}>
            <ul style={sty.ul}>
              <li style={sty.li}>weibo</li>
              <li style={sty.li}>github</li>
              <li style={sty.li}>zhihu</li>
            </ul>
          </span>
        </div>
        <div style={sty.row}>
          <span style={sty.lbl}>Blog</span>
          <span style={sty.link}>Add</span>
        </div>
        <div style={sty.row}>
          <span style={sty.lbl}>Publicity</span>
          <div style={sty.pub}>
            <div style={sty.pubLeft}>
              <div style={sty.fstRowPubIt}>
                <label>
                  <input type="checkbox" name="Location"/>
                  <span style={sty.span}></span>Location
                </label>
              </div>
              <div style={sty.secRowPubIt}>
                <label>
                  <input type="checkbox" name="Dynamics"/>
                  <span style={sty.span}></span>Dynamics
                </label>
              </div>
            </div>
            <div style={sty.pubRight}>
              <div style={sty.fstRowPubIt}>
                <label>
                  <input type="checkbox" name="Teams"/>
                  <span style={sty.span}></span>Teams
                </label>
              </div>
              <div style={sty.secRowPubIt}>
                <label>
                  <input type="checkbox" name="Blog"/>
                  <span style={sty.span}></span>Blog
                </label>
              </div>
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
    //switLan : (lan) => navAction.switLan(lan),
    //switNavItem: (item) => navAction.switNavItem(item)
    //getUsrInf : comAction.getUsrInf()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfor)