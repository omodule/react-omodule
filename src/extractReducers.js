import { isSyncReducer } from './common'

const extractReducers = (omodule, syncReducer = {}) => {
    let { reducer, route, childOmodules } = omodule || {}

    if (isSyncReducer(reducer)) {
        syncReducer = { ...syncReducer, ...reducer }
    }

    childOmodules = childOmodules || []

    syncReducer = childOmodules.reduce((syncReducer, omodule) => {
        return {
            ...syncReducer,
            ...extractReducers(omodule, syncReducer)
        }
    }, syncReducer)

    return syncReducer
}

export default extractReducers
