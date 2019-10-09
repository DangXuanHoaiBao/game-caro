import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import Game from './containers/index'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);
 
render(
    <Provider store={store}>
        <Game/>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
