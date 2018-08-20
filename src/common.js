import isObjectLike from 'lodash/isObjectLike'

export const isSyncReducer = reducer => {
    return isObjectLike(reducer)
}

export const isLazyReducer = reducer => {
    return typeof reducer === 'function'
}
