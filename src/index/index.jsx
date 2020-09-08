import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore, compose} from 'redux';
import reducers from './reducers'
import './index.css';
import App from './App.js';
import * as serviceWorker from '../serviceWorker';

const store = compose(
    applyMiddleware(ReduxThunk)
)(createStore)(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const body = (
    <Provider store={store}  >
        <App />
    </Provider>
);

ReactDOM.render(
    body,
    document.getElementById('root')
);
serviceWorker.unregister();
