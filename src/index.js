import extractRoutes from './extractRoutes'
import { lazyReducerEnhancer } from 'lazy-reducer'
import extractReducers from './extractReducers'
const omoduleEnhancer = lazyReducerEnhancer

export { extractRoutes, omoduleEnhancer, extractReducers }
