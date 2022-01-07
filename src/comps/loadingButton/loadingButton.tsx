import React from 'react'
import {connect} from 'react-redux';
import './loadingButton.scss'
import {switchLoading} from "../../utils/store/actionCreators";

const LoadingButton: React.FC<{ label: string, switchLoading: any, isLoading: boolean}> = ({label, switchLoading, isLoading}) => {

    return <div className='loadingButtonComp'>
        <button className='button' onClick={switchLoading}>{(isLoading ? 'stop ': 'start ') + label}</button>
    </div>
}

const mapDispatchToProps = {switchLoading}
// wich means
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         switchLoading: () => {
//             dispatch(switchLoading())
//         }
//     }
// }

export default connect(null, mapDispatchToProps)(LoadingButton);