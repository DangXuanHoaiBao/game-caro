import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import indexReducer from './reducers/index';
import App from './components/app';
import './css/index.css';

const store = createStore(
    indexReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);
 
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
