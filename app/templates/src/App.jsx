import React from 'react';
import { render } from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { AppProvider, Application } from './core';
import {
    NotFound,
    Home
} from './containers';

const router = routerMiddleware(browserHistory);

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, router, logger())
    )
);

const history = syncHistoryWithStore(browserHistory, store);

render((
    <AppProvider store={store}>
        <Router history={history}>
            <Route path="/" component={Application}>
                <IndexRoute component={Home} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </AppProvider>
), document.getElementById('App'));
