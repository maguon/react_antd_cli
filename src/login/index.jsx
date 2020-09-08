import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore, compose} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from '../serviceWorker';
import reducers from './reducers'

const store = compose(
    applyMiddleware(ReduxThunk)
)(createStore)(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
