import {Dispatch} from 'redux'
import {authAPI} from '../../api/api';

export type AuthStateType = {
    id?: number
    email?: string
    login?: string
    isAuth: boolean
}

type ActionType = ReturnType<typeof setUserDataAC>

const initialState: AuthStateType = {
    id: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
}


export const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            const stateCopy = {...state}
            stateCopy.id = action.data.id
            stateCopy.email = action.data.email
            stateCopy.login = action.data.login
            stateCopy.isAuth = true
            return stateCopy
        }
        default: {
            return state
        }
    }
}
export const setUserDataAC = (data: ResponseType) => {
    return {
        type: 'SET-USER-DATA',
        data,
    } as const
}
export type ResponseType = {
    id?: number
    email?: string
    login?: string
}
export const getUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.getUserData()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserDataAC(response.data))
            }
        })
}