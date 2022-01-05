import React from 'react'
import {mapDispatchToProps} from "../../utils/dispatchedProps";
import {connect} from 'react-redux';
import './loadingButton.scss'


const LoadingButton: React.FC<{label:string, switchLoading: any}> = ({label, switchLoading}) => {

    return <button className='loadingButton' onClick={switchLoading}>{label}</button>
}

export default connect(null, mapDispatchToProps)(LoadingButton);