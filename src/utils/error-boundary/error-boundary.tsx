import React from 'react';
import ErrorPage from './errorPage';


export default class ErrorBoundary extends React.Component<Props, State> {
    state: State = {
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


interface Props {
    children: React.ReactNode
}

interface State {
    isError: boolean,
    errorType?: number
}