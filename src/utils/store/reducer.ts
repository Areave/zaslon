import {Types} from '../types'

const initialState = {
    sections: false,
    name: ''
}

const reducer = (state: Types.State, action: Types.Action) => {
    switch (action.type) {
        case 'SET_WELCOME':
            return {...state, name: action.payload};
            break;
        case 'SET_LOADING':
            return {...state, isLoading: !state.isLoading};
            break;
    //     case 'SET_FORUM_SECTIONS':
    //         return {...state, forumSections: action.payload};
    //         break;
    }
    return initialState;
}

export default reducer