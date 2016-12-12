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

const News = {
  path: 'home/news/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/News').default)
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
  path: 'projects/lfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/LFS').default)
    }) 
  }
}

const ALFS = {
  path: 'projects/alfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/ALFS').default)
    }) 
  }
}

const BLFS = {
  path: 'projects/blfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/BLFS').default)
    }) 
  }
}

const CLFS = {
  path: 'projects/clfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/CLFS').default)
    }) 
  }
}

const HLFS = {
  path: 'projects/hlfs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/HLFS').default)
    }) 
  }
}

const Hints = {
  path: 'projects/hints',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Hints').default)
    }) 
  }
}

const LiveCD = {
  path: 'projects/livecd',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/LiveCD').default)
    }) 
  }
}

const Patches = {
  path: 'projects/patches',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/Patches').default)
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
  path:'information',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/ProfileInfor').default)
    }) 
  },
}

const Profile = {
  path:'profile',
  indexRoute: { onEnter: (nextState, replace) => replace('/profile/information') },
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

const Dashboard = {
  path: '/admin',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('./pages/admin/Dashboard').default)
    }) 
  }
}

const routes = 
[
  {
      path: '/',
      component: App,
      indexRoute: { onEnter: (nextState, replace) => replace('/home') },
      childRoutes: [
        Home,
        News,
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
        Profile
      ]
  },
  Dashboard,
  PageNotFound
]


export default routes



