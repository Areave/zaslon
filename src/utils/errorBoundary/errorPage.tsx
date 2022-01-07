import React from "react";
import './errorPage.scss'

const ErrorPage: React.FC<{ errorType: number | undefined }> = (props) => {
    return <div className='errorPage'>
        <div className='message'>error code is <div className='code'>
            {props.errorType ? props.errorType : 'no code'}
        </div>
        </div>
    </div>
}

export default ErrorPage;
