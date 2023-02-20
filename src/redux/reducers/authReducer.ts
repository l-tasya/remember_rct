import {authAPI, profileAPI} from '../../api/api';
import {AppThunkDispatchType} from '../../common/hook/hooks';
import {AuthReducerType, IProfile, ResultCodes} from '../../common/types/types';
import {Dispatch} from 'redux';
import {RequestStatusType, setErrorAC, setLoadingStatusAC} from './appReducer';
import {setProfileStatusAC} from './profileReducer';
import {handleServerAppError, handleServerNetworkError} from '../../common/utils/error-utils';

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
    profile: null
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
export const fetchLoginTC = () => (dispatch: AppThunkDispatchType) => {
    authAPI.getUserData()
        .then((response) => {
                if (response.data.resultCode === ResultCodes.Success) {
                    dispatch(setUserDataAC({...response.data.data, isAuth: true}))
                    dispatch(getProfileThunkCreator(response.data.data.id))
                }
            }
        )

}
const getProfileThunkCreator = (id: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(id).then(response => {
            dispatch(setAuthProfileAC(response.data))
        }).catch(() => console.log('getProfile thunk'))
    }
}
export const logIn = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppThunkDispatchType) => {
    let response = await authAPI.logIn(email, password, rememberMe)
    if (response.data.resultCode === ResultCodesForCaptcha.Success) {
        dispatch(fetchLoginTC())
    } else {
        console.error(response.data.messages)
        alert('Incorrect Password or Login')
    }


}

export const logOut = () => {
    let logOut: AuthReducerType = {
        isAuth: false,
        profile: null,
        id: undefined,
        email: undefined,
        login: undefined,
    }
    return (dispatch: AppThunkDispatchType) => {
        authAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(logOut))
                }
            })

    }
}