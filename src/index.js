import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'

let store = createStore(commentApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);