import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import promise from 'redux-promise-middleware';
import reducer, { canvasDefaultState } from './svgReducer';

const __TEST__ = !window.__REDUX_DEVTOOLS_EXTENSION__;

const enhance = !__TEST__
  ? compose(
    applyMiddleware(promise),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  : applyMiddleware(promise);

// FIXME: fixme later for the `any`
const store = createStore(reducer as any, canvasDefaultState);

store.subscribe(() => {
  // console.log('store changed');
});
export { store };
