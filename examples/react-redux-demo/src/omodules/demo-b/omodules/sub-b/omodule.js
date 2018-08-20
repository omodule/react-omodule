import route from './route'
import reducer from './reducer'

export default {
    reducer: {
        [`${__onamespace}`]: reducer
    },
    route,
    childOmodules: (r => {
        return r.keys().map(key => r(key).default)
    })(require.context('./', true, /^\.\/omodules\/((?!\/)[\s\S])+\/omodule\.js$/))
}
