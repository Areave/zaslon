import {Types} from '../types'

export const setWelcome: (name: string) => Types.Action = (name) => {
    return {
        type: 'SET_WELCOME',
        payload: name
    }
}

export const switchLoading: () => Types.Action = () => {
    return {
        type: 'SET_LOADING'
    }
}