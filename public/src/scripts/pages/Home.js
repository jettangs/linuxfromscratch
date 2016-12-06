import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { wrap } from 'react-bounds'
import CSSModules from 'react-css-modules';

import reactCSS from 'reactcss'
import styles from '../../styles/home.css'

import content from '../../assets/content.json'


class Home extends React.Component{

  render() {
    let cont = content[this.props.language].home

    return (
      <div className='home'>
          <p className='title'>
            {this.props.activeBounds}
            
          </p>
          <div className='content'>
            &emsp;&emsp;{cont.p1} <br/>
            &emsp;&emsp;{cont.p2}
            &nbsp;<Link className='link' to="/projects">{cont.p3}</Link>&nbsp;
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
)(wrap(Home))

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(wrap(CSSModules(Home, styles)))

// export default wrap(Home)


