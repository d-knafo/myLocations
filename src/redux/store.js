import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// defaults to localStorage
const initialState = {}
const enhancers = []
const middleware = [ thunk ]

const persistConfig = { key: 'root', storage }

const persistedReducer = persistReducer(persistConfig, rootReducer)

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

export default () => {
  let store = createStore(persistedReducer, initialState, composedEnhancers)
  let persistor = persistStore(store)
  return { store, persistor }
}
