import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import App from '../../components/App'

const Home = {
  path: 'home',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/Home').default)
    }) 
  }
}

const News = {
  path: 'home/news/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/News').default)
    }) 
  }
}

const Tutorials = {
  path: 'tutorials',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/Tutorials').default)
    }) 
  }
}

const Projects = {
  path: 'projects(/:name)',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/Projects').default)
    }) 
  }
}

const Posting = {
  path: 'posting/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/Posting').default)
    }) 
  }
}

const Community = {
  path:'community',
  indexRoute: { onEnter: (nextState, replace) => replace('/community/posting/b1c98675-8b29-481e-8b94-a86ef15ed8cc') },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/Community').default)
    }) 
  },
  childRoutes: [Posting] //注意childRoutes必须在前面定义
}

const Profile = {
  path:'profile',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/Profile').default)
    }) 
  }
}

const PageNotFound = {
  path: '*',
  //indexRoute: { onEnter: (nextState, replace) => replace('/404') },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/PageNotFound').default)
    }) 
  }
}

const Dashboard = {
  path: '/admin',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      return cb(null, require('../../pages/admin/Dashboard').default)
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
        Profile
      ]
  },
  Dashboard,
  PageNotFound
]


export default routes



