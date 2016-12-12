import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules-simply'

import assign from 'lodash.assign';
import Markdown from 'react-markdown';
import CodeBlock from '../../global/scripts/plugins/code-block';
import MarkdownControls from '../../global/scripts/plugins/markdown-controls';

import style from './index.css'
import news from '../../assets/jsons/home/news.json'
import newsSrc from '../../assets/markdown/ss.md'

class News extends Component {

  getNewObj() {
    let newsObj
    news.map((item, index) => {
      if (item._id == this.state.id) 
        newsObj = item
    })
    return newsObj
  }

  componentWillMount() {
    let path = window.location.hash
    let _id = path.substring(path.lastIndexOf('/') + 1)
    this.setState({id: _id, src: newsSrc, htmlMode: 'raw'})
  }

  render() {
    let newsObj = this.getNewObj()
    return (
      <div style="news">
        <Markdown source={this.state.src} renderers={assign({}, Markdown.renderers, {CodeBlock: CodeBlock})}/>
      </div>
    )
  }
}

const mapStateToProps = (state, prop) => {
  return {language: state.common.language}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(News, style))