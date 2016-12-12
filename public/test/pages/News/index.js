import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules-simply'
import Markdown from 'react-markdown';
import assign from 'lodash.assign';

import CodeBlock from '../../plugins/code-block';
import MarkdownControls from '../../plugins/markdown-controls';

import style from '../../styles/news.css'
import news from '../../jsons/home/news.json'
import newsSrc from '../../markdown/ss.md'

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
        <Markdown
          source={this.state.src}
          renderers={assign({}, Markdown.renderers, {CodeBlock: CodeBlock})}/>
      </div>
    )
  }
}

const mapStateToProps = (state, prop) => {
  return {language: state.common.language}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(News, style))