
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
export type UsersStateType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsers: number
}

const initialState: UsersStateType = {
    users: [],
    pageSize: 12,
    currentPage: 2,
    totalUsers: 0,
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