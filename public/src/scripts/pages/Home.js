import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import homeSty from '../../styles/home.css'
import content from '../../assets/content.json'

class Home extends Component{
  render() {
    let cont = content[this.props.language].home
    return (
      <div className="home">
          <p className="home-title">{cont.title}</p>
          <div className="homt-content">
            &emsp;&emsp;{cont.p1} <br/>
            &emsp;&emsp;{cont.p2}
            &nbsp;<Link to="/projects">{cont.p3}</Link>&nbsp;
           {cont.p4}
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
)(Home)