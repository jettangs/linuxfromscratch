import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import assign from 'lodash.assign';
import Markdown from 'react-markdown';
import CodeBlock from '../../global/scripts/plugins/code-block';
import MarkdownControls from '../../global/scripts/plugins/markdown-controls';

import tutorials from '../../assets/markdown/tutorials.md'
import styles from './index.css'
import comAction from '../../actions/common'

class Tutorials extends Component{

  componentDidMount() {
    this.props.switNavItem('tutorials')
  }

  render() {
    return (
        <Markdown style="tutorials" source={tutorials} renderers={assign({}, Markdown.renderers, {CodeBlock: CodeBlock})}/>
    )
  }
}

const mapStateToProps = (state,prop)=>{
    return {
      language: state.common.language,
    }
}

const mapDispatchToProps = {
  switNavItem: (item) => comAction.switNavItem(item)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Tutorials,styles))