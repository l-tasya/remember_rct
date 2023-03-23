import {authAPI, profileAPI, securityAPI} from '../../api/api';
import {AppThunkDispatchType} from '../../common/hook/hooks';
import {IProfile, ResultCodes} from '../../common/types/types';
import {Dispatch} from 'redux';
import {RequestStatusType, setErrorAC, setLoadingStatusAC} from '../App/appReducer';
import {setProfileStatusAC} from '../Profile/profileReducer';
import {handleServerAppError, handleServerNetworkError} from '../../common/utils/error-utils';
import {AxiosError} from 'axios';

type ActionsType = ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setAuthProfileAC>
    | ReturnType<typeof setProfileStatusAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setAuthEntityAC>
    | ReturnType<typeof setLoadingStatusAC>
    | ReturnType<typeof setCaptchaAC>
    | ReturnType<typeof setProfilePhotoAC>

const initialState = {
    id: undefined as undefined | number,
    email: undefined as undefined | string,
    login: undefined as undefined | string,
    isAuth: false as boolean,
    profile: null as null | undefined | IProfile,
    entity: 'idle' as RequestStatusType,
    captcha: '' as string,
}
export type InitialState = typeof initialState


export const authReducer = (state: InitialState = initialState, action: ActionsType): InitialState => {
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
        case "auth/SET-CAPTCHA": {
            return {...state, captcha: action.newValue}
        }
        case "SET-PROFILE-PHOTO": {
            const stateCopy = {...state}
            stateCopy.profile!.photos = action.payload

            return stateCopy
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
export const setCaptchaAC = (newValue: string) => {
    return {
        type: 'auth/SET-CAPTCHA',
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
export const setProfilePhotoAC = (payload: { large: string, small: string }) => {
    return {
        type: 'SET-PROFILE-PHOTO',
        payload
    } as const
}

export const logIn = (email: string, password: string, rememberMe: boolean, captcha?: string) => (dispatch: AppThunkDispatchType) => {
    dispatch(setLoadingStatusAC('loading'))
    dispatch(setAuthEntityAC('loading'))
    authAPI.logIn(email, password, rememberMe, captcha).then((response) => {
            console.log(response)
            if (response.data.resultCode === ResultCodes.Success) {
                dispatch(setLoadingStatusAC('succeeded'))
                dispatch(setAuthEntityAC('succeeded'))
                dispatch(fetchLoginTC())
                dispatch(setCaptchaAC(''))
            } else if (response.data.resultCode === ResultCodes.Error) {
                handleServerAppError(response.data, dispatch)
                dispatch(setCaptchaAC(''))
                setTimeout(() => dispatch(setAuthEntityAC('failed')), 3200)
            } else if (response.data.resultCode === ResultCodes.CaptchaIsRequired) {
                handleServerAppError(response.data, dispatch)
                securityAPI.getCaptcha().then((response) => {
                    dispatch(setCaptchaAC(response.data.url))
                })


            }
        }
    ).catch((e) => {
        handleServerNetworkError(dispatch, e)
    })

}

export const logOut = () => {
    let logOut: InitialState = {
        isAuth: false,
        profile: null,
        id: undefined,
        email: undefined,
        login: undefined,
        entity: 'idle',
        captcha: '',
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