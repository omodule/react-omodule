export default {
    childOmodules: (r => {
        return r.keys().map(key => r(key).default)
    })(require.context('./', true, /^\.\/omodules\/((?!\/)[\s\S])+\/omodule\.js$/))
}
