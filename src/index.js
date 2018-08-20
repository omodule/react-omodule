import extractRoutes from './extractRoutes'
import { lazyReducerEnhancer } from 'lazy-reducer'
import extractSyncReducer from './extractSyncReducer'
const omoduleEnhancer = lazyReducerEnhancer

export { extractRoutes, omoduleEnhancer, extractSyncReducer }
