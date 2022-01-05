export namespace Store {
    export interface State {
        readonly isAuthorized: boolean,
        readonly isLoading: boolean
    }

    export interface Action {
        type: string,
        payload?: Object
    }
}