import { createStore, applyMiddleware, compose } from 'redux';
//calls the dispatch function directly, so that you can make
//async request
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

//araay of middleware
const middleware = [thunk];

//createStore takes in root reducer, initial state, and any enhancers
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;