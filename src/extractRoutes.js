import { isLazyReducer } from './common'
import { withLazyReducer, LazyReducer } from 'lazy-reducer'
import React from 'react'

function wrapLazyReducer(lazyReducers, component) {
    return withLazyReducer(done => {
        let reducerMaps = []
        for (var i = 0; i < lazyReducers.length; i++) {
            lazyReducers[i]((error, reducerMap) => {
                if (error) {
                    throw error
                } else {
                    reducerMaps = [...reducerMaps, reducerMap]
                    if (reducerMaps.length === lazyReducers.length) {
                        done(
                            reducerMaps.reduce((acc, cur) => {
                                return { ...acc, ...cur }
                            }, {})
                        )
                    }
                }
            })
        }
    })(component)
}

export default function extractRoutes(omodule, lazyReducers = []) {
    const { childOmodules = [], reducer } = omodule
    let { route } = omodule
    if (isLazyReducer(reducer)) {
        lazyReducers = [...lazyReducers, reducer]
    }

    if (route) {
        if (lazyReducers.length > 0) {
            const { component, getComponent } = route
            const newRoute = { ...route }
            if (component) {
                newRoute.component = wrapLazyReducer(lazyReducers, component)
            } else if (getComponent) {
                newRoute.getComponent = (nextState, cb) => {
                    getComponent(nextState, (error, component) => {
                        if (error) {
                            cb(error)
                        } else {
                            cb(null, wrapLazyReducer(lazyReducers, component))
                        }
                    })
                }
            } else {
                newRoute.component = props => (
                    <LazyReducer
                        reducers={done => {
                            let reducerMaps = []
                            for (var i = 0; i < lazyReducers.length; i++) {
                                lazyReducers[i]((error, reducerMap) => {
                                    if (error) {
                                        throw error
                                    } else {
                                        reducerMaps = [...reducerMaps, reducerMap]
                                        if (reducerMaps.length === lazyReducers.length) {
                                            done(
                                                reducerMaps.reduce((acc, cur) => {
                                                    return { ...acc, ...cur }
                                                }, {})
                                            )
                                        }
                                    }
                                })
                            }
                        }}>
                        {props.children}
                    </LazyReducer>
                )
            }
            route = newRoute
        }
        return [
            ...childOmodules.reduce((childRoutes, omodule) => {
                return [...childRoutes, ...extractRoutes(omodule, lazyReducers)]
            }, []),
            route
        ]
    }
    return [
        ...childOmodules.reduce((childRoutes, omodule) => {
            return [...childRoutes, ...extractRoutes(omodule, lazyReducers)]
        }, [])
    ]
}
