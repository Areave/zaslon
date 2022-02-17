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

// export const setForumSections: (forumSections: any) => Types.Action = (forumSections) => {
//     return {
//         type: 'SET_FORUM_SECTIONS',
//         payload: forumSections
//     }
// }