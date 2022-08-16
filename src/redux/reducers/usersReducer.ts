
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
export type StateType = {
    users: UserType[]
}

const initialState: StateType = {
    users: []
}

export const usersReducer = (state: StateType = initialState, action: ActionsType): StateType =>{
    switch(action.type){
        case "SET-USERS":{
            const stateCopy = {...state}
            stateCopy.users = [...stateCopy.users, ...action.users]
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