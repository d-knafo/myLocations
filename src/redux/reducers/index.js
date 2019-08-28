import { combineReducers } from 'redux'
import counter from './counter'
import categories from './categories'
import locations from './locations'

export default combineReducers({ counter, categories, locations })
