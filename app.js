import React from 'react'
import ReactDOM from 'react-dom'
import Decster from './src/containers/Decster'
import './src/styles/app.scss'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './src/reducers/rootReducer'

const store = createStore(
  rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Decster />
  </Provider>
  , document.getElementById('app'))
