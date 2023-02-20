import {Dispatch} from 'redux';
import {usersAPI} from '../../api/api';
import {IUser} from '../../common/types/types';
import {RequestStatusType, setLoadingStatusAC} from './appReducer';
import {ErrorCustomType, handleServerAppError, handleServerNetworkError} from '../../common/utils/error-utils';
import {AxiosError} from 'axios';

export type UserType = {
    name: string
    id: number
    photo: {
        small?: string,
        large?: string,
    }
    status?: string
    followed: boolean
}
type ActionsType = ReturnType<typeof setUsersAC>
    | ReturnType<typeof changeTotalUsersAC>
    | ReturnType<typeof changeIsFetchingAC>
    | ReturnType<typeof changeCurrentPageAC>
    | ReturnType<typeof changePageSizeAC>
    | ReturnType<typeof changeUserFollowAC>
    | ReturnType<typeof changeFollowingProgressAC>
    | ReturnType<typeof setLoadingStatusAC>
    | ReturnType<typeof setUserEntityAC>
export type UsersStateType = {
    users: IUser[]
    pageSize: number
    currentPage: number
    totalUsers: number
    isFetching: boolean
    followingInProgress: Array<number | undefined>
    entityStatus: RequestStatusType
}

const initialState: UsersStateType = {
    users: [],
    pageSize: 12,
    currentPage: 1,
    totalUsers: 0,
    isFetching: false,
    followingInProgress: [],
    entityStatus: 'idle',
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case 'SET-USERS': {
            const stateCopy = {...state}
            stateCopy.users = [...action.users]
            return stateCopy
        }
        case 'CHANGE-TOTAL-USERS': {
            const stateCopy = {...state}
            stateCopy.totalUsers = action.newValue
            return stateCopy
        }
        case 'CHANGE-IS-FETCHING': {
            const stateCopy = {...state}
            stateCopy.isFetching = action.newValue
            return stateCopy
        }
        case 'CHANGE-CURRENT-PAGE': {
            const stateCopy = {...state}
            stateCopy.currentPage = action.page
            return stateCopy
        }
        case 'CHANGE-PAGE-SIZE': {
            const stateCopy = {...state}
            stateCopy.pageSize = action.count
            return stateCopy
        }
        case 'CHANGE-USER-FOLLOW': {
            let stateCopy = {...state}
            stateCopy.users = stateCopy.users.map(t => t.id === action.userID ? {...t, followed: action.newValue} : t)
            return stateCopy
        }
        case 'CHANGE-FOLLOWING-PROGRESS': {
            const stateCopy = {...state}
            let newID = action.userID
            action.isFetching ? stateCopy.followingInProgress = [...stateCopy.followingInProgress, newID] : stateCopy.followingInProgress = [...stateCopy.followingInProgress.filter(t => t !== action.userID)]
            return stateCopy
        }
        case 'SET-USER-ENTITY': {
            return {...state, entityStatus: action.newValue}
        }
        default: {
            return state
        }
    }
}
export const setUserEntityAC = (newValue: RequestStatusType) => {
    return {
        type: 'SET-USER-ENTITY',
        newValue,
    } as const
}
export const setUsersAC = (users: IUser[]) => {
    return {
        type: 'SET-USERS',
        users,

    } as const
}
export const changeTotalUsersAC = (newValue: number) => {
    return {
        type: 'CHANGE-TOTAL-USERS',
        newValue,
    } as const
}
export const changeIsFetchingAC = (newValue: boolean) => {
    return {
        type: 'CHANGE-IS-FETCHING',
        newValue
    } as const
}
export const changeCurrentPageAC = (page: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        page,
    } as const
}
export const changePageSizeAC = (count: number) => {
    return {
        type: 'CHANGE-PAGE-SIZE',
        count
    } as const
}
export const changeUserFollowAC = (userID: number, newValue: boolean) => {
    return {
        type: 'CHANGE-USER-FOLLOW',
        userID,
        newValue
    } as const
}
export const changeFollowingProgressAC = (userID: number, isFetching: boolean) => {
    return {
        type: 'CHANGE-FOLLOWING-PROGRESS',
        isFetching,
        userID
    } as const
}
export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(changeIsFetchingAC(true))
        dispatch(setLoadingStatusAC('loading'))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                if (response.data) {
                    dispatch(setUsersAC(response.data.items))
                    setTimeout(() => {
                        dispatch(changeIsFetchingAC(false))
                        dispatch(setLoadingStatusAC('succeeded'))
                    }, 1000)
                    dispatch(changeTotalUsersAC(response.data.totalCount))
                } else {
                    handleServerAppError(response.data, dispatch)
                }
            })
            .catch((e) => {
                handleServerNetworkError(dispatch, e)
            })
    }
}
export const followTC = (id: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(changeFollowingProgressAC(id, true))
        dispatch(setLoadingStatusAC('loading'))
        usersAPI.postFollow(id)
            .then(response => {
                console.log(response.data.resultCode)
                if (response.data.resultCode === 0) {
                    dispatch(changeUserFollowAC(id, true))
                    dispatch(setLoadingStatusAC('succeeded'))
                    dispatch(changeFollowingProgressAC(id, false))

                } else {
                    handleServerAppError(response.data, dispatch)
                    setTimeout(() => dispatch(changeFollowingProgressAC(id, false)), 3200)
                }
            })
            .catch((e: AxiosError<ErrorCustomType>) => {
                console.log(e.response)
                handleServerNetworkError(dispatch, e.response ? {message: e.response.data.message} : e)
                dispatch(changeFollowingProgressAC(id, false))
            })
    }
}
export const unFollowTC = (id: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(changeFollowingProgressAC(id, true))
        dispatch(setLoadingStatusAC('loading'))
        usersAPI.deleteFollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(changeUserFollowAC(id, false))
                    dispatch(setLoadingStatusAC('succeeded'))
                } else {
                    handleServerAppError(response.data, dispatch)
                    setTimeout(() => dispatch(changeFollowingProgressAC(id, false)), 3200)

                }
                dispatch(changeFollowingProgressAC(id, false))

            })
            .catch(error => {
                handleServerNetworkError(dispatch, error)
                dispatch(changeFollowingProgressAC(id, false))
            })
    }
}