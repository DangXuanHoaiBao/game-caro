import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import rootReducer from './reducers';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);
 
render(
    <App store={store}/>,
    document.getElementById('root')
)

serviceWorker.unregister()
