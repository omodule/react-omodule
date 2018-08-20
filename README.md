# react-omodule

### 如何接入 react-omodule ？

```javascript
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import React from 'react'
import { render } from 'react-dom'
import { extractRoutes, extractReducers } from 'react-omodule'
// 引入 root omodule
import rootOmodule from './omodule'

// 提取 omodule 中 routes
const routes = extractRoutes(rootOmodule)
// 提取 omodule 中 reducers
const rootReducers = extractReducers(rootOmodule)

const store = createStore(combineReducers(rootReducers), {})

render(
    <Provider store={store}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>,
    document.getElementById('root')
)
```
