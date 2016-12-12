import React, { Component } from 'react'
import { Link } from 'react-router'
import projSty from '../../styles/projects.css'
import content from '../../jsons/global.json'
import {connect} from 'react-redux'

class Projects extends Component{
  render() {
    let cont = content[this.props.language].projects
    return (
      <div className="projects">
        <p>
          &emsp;&emsp;{cont.p1}<br/>
          &emsp;&emsp;<Link to="/lfs">LFS</Link> : {cont.p2}<br/>
          &emsp;&emsp;<Link to="/blfs">BLFS</Link> : {cont.p3}<br/>
          &emsp;&emsp;<Link to="/alfs">ALFS</Link> : {cont.p4}<br/>
          &emsp;&emsp;<Link to="/clfs">CLFS</Link> : {cont.p5}<br/>
          &emsp;&emsp;<Link to="/hlfs">HLFS</Link> : {cont.p6}<br/>
          &emsp;&emsp;<Link to="/hints">Hints</Link> : {cont.p7}<br/>
          &emsp;&emsp;<Link to="/livecd">LiveCD</Link> : {cont.p8}<br/>
          &emsp;&emsp;<Link to="/patches">Patches</Link> : {cont.p9}<br/>
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
)(Projects)