
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
|ReturnType<typeof changeTotalUsersAC>
|ReturnType<typeof changeIsFetchingAC>
|ReturnType<typeof changeCurrentPageAC>
export type UsersStateType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsers: number
    isFetching: boolean
}

const initialState: UsersStateType = {
    users: [],
    pageSize: 12,
    currentPage: 2,
    totalUsers: 0,
    isFetching: false,
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType =>{
    switch(action.type){
        case "SET-USERS":{
            const stateCopy = {...state}
            stateCopy.users = [...action.users]
            return stateCopy
        }
        case "CHANGE-TOTAL-USERS":{
            const stateCopy = {...state}
            stateCopy.totalUsers = action.newValue
            return stateCopy
        }
        case "CHANGE-IS-FETCHING":{
            const stateCopy = {...state}
            stateCopy.isFetching = action.newValue
            return stateCopy
        }
        case "CHANGE-CURRENT-PAGE":{
            const stateCopy = {...state}
            stateCopy.currentPage = action.page
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
export const changeTotalUsersAC = (newValue: number)=>{
    return {
        type: "CHANGE-TOTAL-USERS",
        newValue,
    }as const
}
export const changeIsFetchingAC = (newValue: boolean) =>{
    return {
        type: 'CHANGE-IS-FETCHING',
        newValue
    } as const
}
export const changeCurrentPageAC = (page: number) => {
    return{
        type: 'CHANGE-CURRENT-PAGE',
        page,
    } as const
}
