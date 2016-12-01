import React, { Component } from 'react'
import { render } from 'react-dom'
import reactRouter,{ Router, Route, IndexRedirect, useRouterHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk' 
import { createHashHistory } from 'history'
import { createStore, applyMiddleware } from "redux"
import { Provider,connect } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import reducers from "./scripts/reducers"
import routes from './scripts/routes'

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

let routerHistory = useRouterHistory(createHashHistory)({queryKey:false})

const appHistory = syncHistoryWithStore(routerHistory, store)

render((
    <Provider store={store}>
      <Router history={appHistory} routes={routes}/>
    </Provider>
), document.getElementById('app'))