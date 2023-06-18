import {
    createStore, combineReducers,
    applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';

import photosReducer from './reducers/photosReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        photos: photosReducer
    }),
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;
