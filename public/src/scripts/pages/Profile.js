import React, { Component } from 'react'
import { Link } from 'react-router'
import profSty from '../../styles/profile.css'
import { connect } from 'react-redux'
import comAction from '../actions/common'

class Profile extends Component{

  render() {
    return (
      <div className="profile">
        <div className="left-panel">
          <div className="grey"></div>
          <div className="headImg">
            <img src="../../assets/profileHeadImg.png"/>
          </div>
          <div className="username">
            jettang
          </div>
          <div className="lv">
            Lv.17
          </div>
          <div className="location-icon"></div>
          <div className="location-name">广州</div>
          <div className="normal-position">
            <div className="signature">
              <div className="signature-lbl">最怕脑子不好使</div>
              <div className="signature-icon"></div>
            </div>
            <div className="gold-fav">
              <ul>
                <li className="gold-icon"></li>
                <li className="gold-num">
                  63
                </li>
                <li className="vertical-line"></li>
                <li className="fav-icon"></li>
                <li className="fav-num">
                    238
                </li>
              </ul>
            </div>
            <div className="circles">
              <ul>
                <li className="weibo"></li>
                <li className="github"></li>
                <li className="zhihu"></li>
                <li className="twitter"></li>
              </ul>
            </div>
            <div className="blog">
              www.jettangs.com
            </div>
            <div className="follow">
              <ul className="content">
                <li className="followers">
                  <div className="num">14</div>
                  <div className="lbl">Followers</div>
                </li>
                <li className="following">
                  <div className="num">8</div>
                  <div className="lbl">Following</div>
                </li>
                <li className="postings">
                  <div className="num">26</div>
                  <div className="lbl">Postings</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-panel">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,prop)=>{
    return {
       usrIsSgi: state.common.usrIsSgi
    }
}

const mapDispatchToProps = {
    setUsrIsSgi : (val) => comAction.setUsrIsSgi(val),
    dispSignBox: (bool) => comAction.dispSignBox(bool),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)