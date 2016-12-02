import React, { Component } from 'react'
import { Link } from 'react-router'
import profSty from '../../styles/profile.css'
import { connect } from 'react-redux'


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
            <i>Lv.17</i>
          </div>
          <div className="location-icon"></div>
          <div className="location-name">广州</div>
          <div className="normal-position">
            <div className="signature">
              <div className="signature-lbl">最怕脑子不好使</div>
              <div className="signature-icon"></div>
            </div>
            
            <div className="gold-img">
              <img src="../../assets/gold.png"/>
            </div>
            <div className="gold-num">
              63
            </div>
            <div className="fav">
              <div className="fav-img">
                  <img src="../../assets/fav.png"/>
                </div>
              <div className="fav-num">
                  238
              </div>
            </div>
            <div className="circles">
              <div className="circles-lbl">Circles</div>
              <ul>
                <li className="weibo"></li>
                <li className="github"></li>
                <li className="zhihu"></li>
                <li className="twitter"></li>
              </ul>
            </div>
            <div className="teams">
              <div className="team-lbl">teams</div>
              <ul>
                <li className="weibo"></li>
                <li className="github"></li>
                <li className="zhihu"></li>
                <li className="twitter"></li>
              </ul>
            </div>
            <div className="blog">
              <div className="blog-lbl">blog</div>
            </div>
            <div className="joined">
              <div className="joined-lbl">joined</div>
            </div>
            <div className="follow">
              <div className="followers">
                <div className="followers-num">14</div>
                <div className="followers-lbl">Followers</div>
              </div>
              <div className="followers">
                <div className="following-num">8</div>
                <div className="following-lbl">Following</div>
              </div>
              <div className="postings">
                <div className="postings-num">26</div>
                <div className="postings-lbl">Postings</div>
              </div>
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
)(Profile)