import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import React from 'react'
import { render } from 'react-dom'
import rootOmodule from './omodule'
import { extractRoutes, extractReducers } from 'react-omodule'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

// 提取 omodule 中 routes
const routes = extractRoutes(rootOmodule)
// 提取 omodule 中 reducers
const reducers = extractReducers(rootOmodule)

const store = createStore(combineReducers(reducers))

render(
    <Provider store={store}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>,
    document.getElementById('root')
)
