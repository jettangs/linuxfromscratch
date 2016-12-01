import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Projects extends Component{
  render() {
    return (
      <div>
          <h3></h3>
          <p>Linux From Scratch (LFS) is a project that provides you with step-by-step instructions for building your own custom Linux system, entirely from source code.
Currently, the Linux From Scratch organization consists of the following subprojects:<br/>
<Link to="/lfs">LFS</Link> :: Linux From Scratch is the main book, the base from which all other projects are derived.<br/>
<Link to="/blfs">BLFS</Link> :: Beyond Linux From Scratch helps you extend your finished LFS installation into a more customized and usable system.<br/>
<Link to="/alfs">ALFS</Link> :: Automated Linux From Scratch provides tools for automating and managing LFS and BLFS builds.<br/>
<Link to="/clfs">CLFS</Link> :: Cross Linux From Scratch provides the means to cross-compile an LFS system on many types of systems.<br/>
<Link to="/hlfs">HLFS</Link> :: Hardened Linux From Scratch focuses on building an LFS system with heightened security.<br/>
<Link to="/hints">Hints</Link> :: The Hints project is a collection of documents that explain how to enhance your LFS system in ways that are not included in the LFS or BLFS books.
<Link to="/livecd">LiveCD</Link> :: The LiveCD project provides a CD that is useful as an LFS build host or as a general rescue CD.<br/>
<Link to="/patches">Patches</Link> :: The Patches project serves as a central repository for all patches useful to an LFS user.<br/>
        </p>
      </div>
    )
  }
}