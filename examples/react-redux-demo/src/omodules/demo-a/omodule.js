import reducer from './reducer'
export default {
    // reducer: cb => {
    //     import('./reducer/index').then(
    //         reducerFun => {
    //             const reducer = {}
    //             reducer[__onamespace] = reducerFun.default
    //             cb(null, reducer)
    //         },
    //         error => cb(error || {})
    //     )
    // },
    reducer: {
        [`${__onamespace}`]: reducer
    },
    route: require('./route.js').default,
    childOmodules: (r => {
        return r.keys().map(key => r(key).default)
    })(require.context('./', true, /^\.\/omodules\/((?!\/)[\s\S])+\/omodule\.js$/))
}
