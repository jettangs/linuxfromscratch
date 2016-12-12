import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import signAction from '../../../actions/sign'
import styles from './index.css'

class Dashboard extends Component{

  submit() {
    let username = this.refs.usernameInput.value
    let password = this.refs.passwordInput.value
  }

  render() {
    return (
      <div style="dashboard">
        Username: <input ref="usernameInput" type="text" />
        Password: <input type="password" />
        <button onClick={this.submit.bind(this)}>Login</button>
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
    signin : (data,cb) => signAction.signin(data,cb),
    
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Dashboard,styles))