import React, { Component } from 'react'
import { span } from 'react-router'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import assign from 'lodash.assign';
import Markdown from 'react-markdown';
import CodeBlock from '../../global/scripts/plugins/code-block';
import MarkdownControls from '../../global/scripts/plugins/markdown-controls';

import comAction from '../../actions/common'
import styles from './index.css'
import content from '../../assets/jsons/global.json'

import index from '../../assets/markdown/project/index.md'
import LFS from '../../assets/markdown/project/LFS.md'
import ALFS from '../../assets/markdown/project/ALFS.md'
import BLFS from '../../assets/markdown/project/BLFS.md'
import CLFS from '../../assets/markdown/project/CLFS.md'
import HLFS from '../../assets/markdown/project/HLFS.md'
import Hints from '../../assets/markdown/project/Hints.md'
import LiveCD from '../../assets/markdown/project/LiveCD.md'
import Patches from '../../assets/markdown/project/Patches.md'

let dict = {LFS: LFS, ALFS: ALFS, BLFS: BLFS, CLFS: CLFS, HLFS: HLFS, 
  Hints: Hints,LiveCD: LiveCD, Patches: Patches, projects: index}

class Projects extends Component{

  state = {path:'projects', src:''}

  constructor(props, context) {
      super(props, context);
      this.context.router; // it works
  }

  //因为子项目过多，所以不为每个项目写组件，在该组件更改内容实现
  componentWillReceiveProps({location},nextProps) {
    let path = location.pathname.substr(location.pathname.lastIndexOf('/')+1)
    if(path != this.state.path) {
      this.proItClick(path)
    }
  }

  componentDidMount() {
    this.props.switNavItem('projects')
    let path = this.props.location.pathname
    path = path.substr(path.lastIndexOf('/')+1)
    this.proItClick(path)
  }

  proItClick(item) {
    let src = dict[item]  
    if(!src) {
      this.context.router.replace('/404')
      return
    }
    this.setState({path: item, src:src})
    if(item != 'projects') 
      this.context.router.replace('/projects/'+item)
  }

  render() {
    let cont = content[this.props.language].projects
    return  <Markdown style="projects" source={this.state.src} renderers={assign({}, Markdown.renderers, {CodeBlock: CodeBlock})}/>
  }
}

Projects.contextTypes = {
    router: React.PropTypes.object.isRequired
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
)(CSSModules(Projects,styles))