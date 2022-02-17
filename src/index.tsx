import React from 'react';
import {render as renderApp} from 'react-dom';
import {Provider} from 'react-redux';
import App from "./pages/app/app";
import store from './utils/store'
import ErrorBoundary from "./utils/errorBoundary/errorBoundary";

import './style/normalize.scss';
import './style/fonts.scss';
import './style/common.scss';


renderApp(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <App/>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('app'));

