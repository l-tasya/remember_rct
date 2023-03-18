import {authAPI, profileAPI} from '../../api/api';
import {AppThunkDispatchType} from '../../common/hook/hooks';
import {AuthReducerType, IProfile, ResultCodes} from '../../common/types/types';
import {Dispatch} from 'redux';
import {RequestStatusType, setErrorAC, setLoadingStatusAC} from './appReducer';
import {setProfileStatusAC} from './profileReducer';
import {handleServerAppError, handleServerNetworkError} from '../../common/utils/error-utils';
import {AxiosError} from 'axios';

type ActionsType = ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setAuthProfileAC>
    | ReturnType<typeof setProfileStatusAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setAuthEntityAC>
    | ReturnType<typeof setLoadingStatusAC>

const initialState: AuthReducerType = {
    id: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
    profile: null,
    entity: 'idle'
}


export const authReducer = (state: AuthReducerType = initialState, action: ActionsType): AuthReducerType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.payload}
        }
        case 'SET-AUTH-PROFILE': {
            return {...state, profile: action.payload}
        }
        case 'SET/AUTH-ENTITY': {
            return {...state, entity: action.newValue}
        }
        default: {
            return state
        }
    }
}
type Payload = {
    id?: number
    email?: string
    login?: string
    isAuth: boolean
}
export const setUserDataAC = (payload: Payload) => {
    return {
        type: 'SET-USER-DATA',
        payload,
    } as const
}
export const setAuthProfileAC = (payload: IProfile) => {
    return {
        type: 'SET-AUTH-PROFILE',
        payload,
    } as const
}
export const setAuthEntityAC = (newValue: RequestStatusType) => {
    return {
        type: 'SET/AUTH-ENTITY',
        newValue,
    } as const
}
export const fetchLoginTC = () => async (dispatch: AppThunkDispatchType) => {
    dispatch(setLoadingStatusAC('loading'))
    let response = await authAPI.getUserData()
    try {
        if (response.data.resultCode === ResultCodes.Success) {
            dispatch(setUserDataAC({...response.data.data, isAuth: true}))
            await profileAPI.getProfile(response.data.data.id).then(response => {
                dispatch(setAuthProfileAC(response.data))
            })
            dispatch(setLoadingStatusAC('succeeded'))
        }
        dispatch(setLoadingStatusAC('succeeded'))
    } catch (e) {
        if (e instanceof AxiosError) {
            // ✅ TypeScript knows err is AxiosError
            return handleServerNetworkError(dispatch, e)
        } else {
            console.error(e)
        }
    }

}

export const logIn = (email: string, password: string, rememberMe: boolean) => (dispatch: AppThunkDispatchType) => {
    dispatch(setLoadingStatusAC('loading'))
    dispatch(setAuthEntityAC('loading'))
    authAPI.logIn(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === ResultCodes.Success) {
            dispatch(setLoadingStatusAC('succeeded'))
            dispatch(setAuthEntityAC('succeeded'))
            dispatch(fetchLoginTC())

        } else {
            handleServerAppError(response.data, dispatch)
            setTimeout(() => dispatch(setAuthEntityAC('failed')), 3200)
        }
    }).catch((e) => {
        handleServerNetworkError(dispatch, e)
    })

}

export const logOut = () => {
    let logOut: AuthReducerType = {
        isAuth: false,
        profile: null,
        id: undefined,
        email: undefined,
        login: undefined,
        entity: 'idle'
    }
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setLoadingStatusAC('loading'))
        dispatch(setAuthEntityAC('loading'))
        return authAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(logOut))
                    dispatch(setLoadingStatusAC('succeeded'))
                    dispatch(setAuthEntityAC('succeeded'))
                } else {
                    handleServerAppError(response.data, dispatch)
                    setTimeout(() => dispatch(setAuthEntityAC('failed')), 3200)
                }

            })
            .catch((e) => {
                return handleServerNetworkError(dispatch, e)
            })

    }
}