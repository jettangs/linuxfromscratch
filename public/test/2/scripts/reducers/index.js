import { combineReducers, createStore, applyMiddleware } from "redux"
import { routerReducer } from 'react-router-redux'
import navigator from "./navigator"
import common from "./common"

export default combineReducers({
  navigator: navigator,
  common: common,
  routing: routerReducer,
})