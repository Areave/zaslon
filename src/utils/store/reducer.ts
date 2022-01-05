import {Store} from '../types'

const initialState = {
    isLoading: false
}

const reducer = (state: Store.State, action: Store.Action) => {
    switch (action.type) {
        case 'switchLoading':
            return {...state, isLoading: !state.isLoading};
    }
    return initialState;
}

export default reducer