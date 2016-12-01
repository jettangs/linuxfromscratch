import React, { Component } from 'react'
import { render } from 'react-dom'
import {connect} from 'react-redux'
import sidBarIndSty from '../../styles/sidBarInd.css'

class SidBarInd extends Component {

  render() {
    return (
      <div className="sidBarInd"></div> 
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      dispSignBox:state.common.dispSignBox,
      actvNavIt: state.navigator.actvNavIt
    }
}

const mapDispatchToProps = {
   
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidBarInd)