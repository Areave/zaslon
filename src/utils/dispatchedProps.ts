import store from '../utils/store/store'

export const mapDispatchToProps = (dispatch: any) => {
    return {
        switchLoading: () => {
            dispatch({type:'switchLoading'})
        }
    }
}

export const mapStateToProps = (state: any) => {
    return state;
    }
