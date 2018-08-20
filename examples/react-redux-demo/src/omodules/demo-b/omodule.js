import route from './route'
// import reducer from './reducer'
console.log(route)

export default {
    // reducer: {
    //     [`${__onamespace}`]: reducer
    // },
    reducer: cb => {
        import('./reducer/index').then(
            reducerFun => {
                const reducer = {}
                reducer[__onamespace] = reducerFun.default
                cb(null, reducer)
            },
            error => cb(error || {})
        )
    },
    route,
    childOmodules: (r => {
        return r.keys().map(key => r(key).default)
    })(require.context('./', true, /^\.\/omodules\/((?!\/)[\s\S])+\/omodule\.js$/))
}
