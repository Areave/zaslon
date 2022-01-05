import React from "react";

const ErrorPage: React.FC<ErrorPageProps> = (props)  => {
    return <div>error code is {props.errorType ? props.errorType : 'no code'}</div>
}

export default ErrorPage;

interface ErrorPageProps {
    errorType: number | undefined
}
