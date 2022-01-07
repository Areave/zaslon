import React from 'react';
import ErrorPage from './errorPage';
import {Types} from './../types'


export default class ErrorBoundary extends React.Component<{children: React.ReactNode}, Types.ErrorState> {
    state: Types.ErrorState = {
        isError: false,
        errorType: undefined
    }

    render() {
        if (this.state.isError) {
            return <ErrorPage errorType={this.state.errorType}/>
        }
        return this.props.children
    }
}