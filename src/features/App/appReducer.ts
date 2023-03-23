import {AppThunkDispatchType} from '../../common/hook/hooks';
import {fetchLoginTC} from '../Auth/authReducer';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as null | string,
    alertMessage: null as null | string,
    initialize: 'loading' as RequestStatusType
}

export type InitialStateType = typeof initialState

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
        case 'APP/SET-INIT': {
            return {...state, initialize: action.newValue}
        }
        default:
            return state
    }
}


export const setLoadingStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

export const setAlertMessageAC = (message: string | null) => ({type: 'APP/SET-ALERT-MESSAGE', message} as const)

export const setAppInitializeAC = (newValue: RequestStatusType) => ({type: 'APP/SET-INIT', newValue} as const)


export const initializeApp = () => (dispatch: AppThunkDispatchType) => {
    let promise = dispatch(fetchLoginTC())
    promise.then(() => {
        dispatch(setAppInitializeAC('succeeded'))
    }).catch((e) => {
        dispatch(setAppInitializeAC('failed'))
        alert(e.message)
    })
}

export type AppActionsType = ReturnType<typeof setLoadingStatusAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setAlertMessageAC>
    | ReturnType<typeof setAppInitializeAC>