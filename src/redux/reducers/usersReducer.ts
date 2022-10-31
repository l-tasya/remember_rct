export type UserType = {
    name: string
    id: number
    photo: {
        small?: string,
        large?: string,
    }
    status: string
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
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsers: number
    isFetching: boolean
    followingInProgress: Array<number | undefined>
}

const initialState: UsersStateType = {
    users: [],
    pageSize: 12,
    currentPage: 2,
    totalUsers: 0,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case "SET-USERS": {
            const stateCopy = {...state}
            stateCopy.users = [...action.users]
            return stateCopy
        }
        case "CHANGE-TOTAL-USERS": {
            const stateCopy = {...state}
            stateCopy.totalUsers = action.newValue
            return stateCopy
        }
        case "CHANGE-IS-FETCHING": {
            const stateCopy = {...state}
            stateCopy.isFetching = action.newValue
            return stateCopy
        }
        case "CHANGE-CURRENT-PAGE": {
            const stateCopy = {...state}
            stateCopy.currentPage = action.page
            return stateCopy
        }
        case "CHANGE-PAGE-SIZE": {
            const stateCopy = {...state}
            stateCopy.pageSize = action.count
            return stateCopy
        }
        case "CHANGE-USER-FOLLOW": {
            let stateCopy = {...state}
            stateCopy.users = stateCopy.users.map(t => t.id === action.userID ? {...t, followed: action.newValue} : t)
            return stateCopy
        }
        case "CHANGE-FOLLOWING-PROGRESS": {
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
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
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
        type: 'CHANGE-FOLLOWING-PROGRESS',
        isFetching,
        userID
    } as const
}