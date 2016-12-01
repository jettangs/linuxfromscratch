import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'

import content from '../../assets/content.json'

class Home extends Component{
  render() {
    let pageContent = content[this.props.language].homePage
    return (
      <div>
          <h3>{pageContent.title}</h3>
          <p>
            {pageContent.p1}
            <Link to="/projects">{pageContent.p2}</Link> 
            {pageContent.p3}
          </p>
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