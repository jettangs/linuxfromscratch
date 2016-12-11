import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import style from '../../styles/profileInfor.css'

class ProfileInfor extends Component{
  render() {
    return (
      <div className="profileInfor" style="body">
        <div style="row">
          <span style="lbl">Username</span>
          <span style="text">jettang</span>
        </div>
        <div style="row">
          <span style='lbl'>Password</span>
          <span style="link">Change</span>
        </div>
        <div style="row">
          <span style="lbl">Email</span>
          <span style="text">625436194@163.com</span>
        </div>
        <div style="row">
          <span style="lbl">Circles</span>
          <span style="text">
            <ul style="ul">
              <li style="li">weibo</li>
              <li style="li">github</li>
              <li style="li">zhihu</li>
            </ul>
          </span>
        </div>
        <div style="row">
          <span style="lbl">Blog</span>
          <span style="link">Add</span>
        </div>
        <div style="row">
          <span style="lbl">Publicity</span>
          <div style="pub">
            <div style="pubLeft">
              <div style="fstRowPubIt">
                <label>
                  <input type="checkbox" name="Location"/>
                  <span style="span"></span>Location
                </label>
              </div>
              <div style="secRowPubIt">
                <label>
                  <input type="checkbox" name="Dynamics"/>
                  <span style="span"></span>Dynamics
                </label>
              </div>
            </div>
            <div style="pubRight">
              <div style="fstRowPubIt">
                <label>
                  <input type="checkbox" name="Teams"/>
                  <span style="span"></span>Teams
                </label>
              </div>
              <div style="secRowPubIt">
                <label>
                  <input type="checkbox" name="Blog"/>
                  <span style="span"></span>Blog
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
)(CSSModules(ProfileInfor,style))