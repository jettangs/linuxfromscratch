import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import App from './components/App'

const Home = {
  path: 'home',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Home').default)
    }) 
  }
}

const Projects = {
  path: 'projects',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Projects').default)
    }) 
  }
}

const Tutorials = {
  path: 'tutorials',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Tutorials').default)
    }) 
  }
}



const LFS = {
  path: 'lfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/LFS').default)
    }) 
  }
}

const ALFS = {
  path: 'alfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/ALFS').default)
    }) 
  }
}

const BLFS = {
  path: 'blfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/BLFS').default)
    }) 
  }
}

const CLFS = {
  path: 'clfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/CLFS').default)
    }) 
  }
}

const HLFS = {
  path: 'hlfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/HLFS').default)
    }) 
  }
}

const Hints = {
  path: 'hints',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Hints').default)
    }) 
  }
}

const LiveCD = {
  path: 'livecd',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/LiveCD').default)
    }) 
  }
}

const Patches = {
  path: 'patches',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Patches').default)
    }) 
  }
}

const Posting = {
  path: 'posting/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Posting').default)
    }) 
  }
}

const Community = {
  path:'community',
  indexRoute: { onEnter: (nextState, replace) => replace('/community/posting/b1c98675-8b29-481e-8b94-a86ef15ed8cc') },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Community').default)
    }) 
  },
  childRoutes: [Posting]
}


const ProfileInfor = {
  path:'infor',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/ProfileInfor').default)
    }) 
  },
}

const Profile = {
  path:'profile',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Profile').default)
    }) 
  },
  //注意childRoutes必须在前面定义
  childRoutes: [ProfileInfor]
}

const PageNotFound = {
  path: '*',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/PageNotFound').default)
    }) 
  }
}

const routes = {
      path: '/',
      component: App,
      indexRoute: { onEnter: (nextState, replace) => replace('/home') },
      childRoutes: [
        Home,
        Projects,
        Tutorials,
        Community,
        LFS,
        ALFS,
        BLFS,
        CLFS,
        HLFS,
        Hints,
        LiveCD,
        Patches,
        Profile,   
        PageNotFound
      ]
}



export default routes



