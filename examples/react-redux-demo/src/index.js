import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import React from 'react'
import { render } from 'react-dom'
import rootOmodule from './omodule'
import { extractRoutes, omoduleEnhancer, extractSyncReducer } from 'react-omodule'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

const routes = extractRoutes(rootOmodule)
const rootReducers = extractSyncReducer(rootOmodule)
console.log(routes);
console.log(rootReducers);

const store = createStore(combineReducers(rootReducers), {}, omoduleEnhancer(rootReducers))
window.store = store
render(
    <Provider store={store}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>,
    document.getElementById('root')
)
