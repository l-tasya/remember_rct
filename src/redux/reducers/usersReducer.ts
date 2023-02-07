import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";
import {IUser} from "../../common/types/types";

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
export type UsersStateType = {
    users: IUser[]
    pageSize: number
    currentPage: number
    totalUsers: number
    isFetching: boolean
    followingInProgress: Array<number | undefined>
}

const initialState: UsersStateType = {
    users: [
        // {
        //     id: 10001,
        //     name: 'Maya Ishita',
        //     status: 'Hi i am Alexandra',
        //     followed: false,
        //     photo: {
        //         large: 'https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=740'
        //     }
        //
        // },
        // {
        //     id: 10002,
        //     name: 'Sridevi Kamakshi',
        //     followed: false,
        //     photo: {
        //         large: 'https://img.freepik.com/premium-vector/asian-girl-face-web-child-avatar-cute-kid-user-picture_622026-83.jpg?w=740'
        //     }
        // },
        // {
        //     id: 10003,
        //     name: 'Marcus Lucile',
        //     status: 'Hi i am Alexandra',
        //     followed: false,
        //     photo: {
        //         large: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'
        //     }
        // },
        // {
        //     id: 10004,
        //     name: 'Unknown User',
        //     status: 'i am unknown',
        //     followed: false,
        //     photo: {}
        // },
        // {
        //     id: 10005,
        //     name: 'Unknown User',
        //     status: 'i am unknown',
        //     followed: false,
        //     photo: {}
        // },
        // {
        //     id: 10006,
        //     name: 'Unknown User',
        //     status: 'i am unknown',
        //     followed: false,
        //     photo: {}
        //
        // },
        // {
        //     id: 10007,
        //     name: 'Unknown User',
        //     status: 'i am unknown',
        //     followed: false,
        //     photo: {}
        //
        // },
        // {
        //     id: 10008,
        //     name: 'Unknown User',
        //     status: 'i am unknown',
        //     followed: false,
        //     photo: {}
        //
        // },
        // {
        //     id: 10009,
        //     name: 'Unknown User',
        //     status: 'i am unknown',
        //     followed: false,
        //     photo: {}
        //
        // },
        // {
        //     id: 10010,
        //     name: 'Unknown User',
        //     status: 'i am unknown',
        //     followed: false,
        //     photo: {}
        //
        // },
    ],
    pageSize: 12,
    currentPage: 1,
    totalUsers: 0,
    isFetching: false,
    followingInProgress: []
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
        default: {
            return state
        }
    }
}
export const setUsersAC = (users: IUser[]) => {
    return {
        type: "SET-USERS",
        users,

    } as const
}
export const changeTotalUsersAC = (newValue: number) => {
    return {
        type: "CHANGE-TOTAL-USERS",
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
        type: "CHANGE-FOLLOWING-PROGRESS",
        isFetching,
        userID
    } as const
}
export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeIsFetchingAC(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setUsersAC(response.data.items))
                let timeOutID = setTimeout(() => {
                    dispatch(changeIsFetchingAC(false))
                }, 1000)
                dispatch(changeTotalUsersAC(response.data.totalCount))
                return () => {
                    clearTimeout(timeOutID)
                }
            })
            .catch(() => {
            })
    }
}
export const followTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingProgressAC(id, true))
        usersAPI.postFollow(id)
            .then(response => {
                console.log(response.data.resultCode)
                if (response.data.resultCode === 0) {
                    dispatch(changeUserFollowAC(id, true))
                    dispatch(changeFollowingProgressAC(id, false))

                }
            })
            .catch(error => {
                    console.warn(error.request.statusText)
                }
            )
    }
}
export const unFollowTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingProgressAC(id, true))
        usersAPI.deleteFollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(changeUserFollowAC(id, false))
                }
                dispatch(changeFollowingProgressAC(id, false))
            })
            .catch(error => console.warn(error.request.statusText)
            )
    }
}