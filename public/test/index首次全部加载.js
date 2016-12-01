import React, { Component } from 'react'
import { render } from 'react-dom'
import {Router, Route, Link, IndexRedirect, useRouterHistory, history } from 'react-router'
import { createHashHistory } from 'history'

import App from './scripts/App'
import Home from './scripts/pages/Home'
import Projects from './scripts/pages/Projects'
import Tutorials from './scripts/pages/Tutorials'
import Community from './scripts/pages/Community'
import PageNotFound from './scripts/pages/PageNotFound'
import LFS from './scripts/pages/LFS'
import ALFS from './scripts/pages/ALFS'
import BLFS from './scripts/pages/BLFS'
import CLFS from './scripts/pages/CLFS'
import HLFS from './scripts/pages/HLFS'
import Hints from './scripts/pages/Hints'
import LiveCD from './scripts/pages/LiveCD'
import Patches from './scripts/pages/Patches'
import Posting from './scripts/pages/Posting'

var appHistory = useRouterHistory(createHashHistory)({queryKey:false});

render((
    <Router history={appHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/home' />
        <Route path='/home' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/lfs' component={LFS} />
        <Route path='/alfs' component={ALFS} />
        <Route path='/blfs' component={BLFS} />
        <Route path='/clfs' component={CLFS} />
        <Route path='/hlfs' component={HLFS} />
        <Route path='/hints' component={Hints} />
        <Route path='/livecd' component={LiveCD} />
        <Route path='/patches' component={Patches} />
        <Route path='/tutorials' component={Tutorials} />
        <Route path='/community' component={Community} />
        <Route path='/posting/:id' component={Posting}/>
        <Route path='*' component={PageNotFound} />
      </Route>
    </Router>
), document.getElementById('app'))