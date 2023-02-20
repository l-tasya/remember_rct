export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as null | string,
    alertMessage: null as null | string,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR': {
            return {...state, error: action.error}
        }
        case 'APP/SET-ALERT-MESSAGE': {
            return {...state, alertMessage: action.message}
        }
        default:
            return state
    }
}


export const setLoadingStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAlertMessageAC = (message: string | null) => ({type: 'APP/SET-ALERT-MESSAGE', message} as const)
export type AppActionsType = ReturnType<typeof setLoadingStatusAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setAlertMessageAC>