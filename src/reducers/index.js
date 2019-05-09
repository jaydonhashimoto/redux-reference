/**
 * https://redux.js.org/basics/reducers
 * Reducers specify how the application's state changes 
 * in response to actions sent to the store. 
 * Remember that actions only describe what happened, 
 * but don't describe how the application's state changes.
 */

//root reducer
//combine all reducers
import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer
});