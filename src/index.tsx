import React from 'react';
import {render as renderApp} from 'react-dom';
import {Provider} from 'react-redux';
import MyRouter from "./utils/router";
import store from './utils/store'
import ErrorBoundary from "./utils/error-boundary/error-boundary";
import './style/fonts.scss';
import './style/normalize.scss';

renderApp(<React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <MyRouter/>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,

    document.getElementById('app'));

