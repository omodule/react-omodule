# react-omodule

### 如何接入 react-omodule ？

```javascript
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import React from 'react'
import { render } from 'react-dom'
import rootOmodule from './omodule'
import { extractRoutes, omoduleEnhancer, extractSyncReducer } from 'react-omodule'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

// 提取 omodule 中 routes
const routes = extractRoutes(rootOmodule)
// 提取 omodule 中 同步reducer
const rootReducers = extractSyncReducer(rootOmodule)
// 添加 omoduleEnhancer
const store = createStore(combineReducers(rootReducers), {}, omoduleEnhancer(rootReducers))
window.store = store
render(
    <Provider store={store}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>,
    document.getElementById('root')
)
```
