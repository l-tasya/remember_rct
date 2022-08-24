import {changeTotalUsersAC, setUsersAC, UsersStateType, usersReducer, UserType} from "./usersReducer"

test('users reducers should set users', ()=>{
    const startState: UsersStateType = {
        users: [],
        pageSize: 12,
        totalUsers: 50,
        currentPage: 2
    }
    let newUsers: UserType[] = [
        {
            id: 9399,
            photo: {
                small: undefined,
                large: undefined,
            },
            status: 'dalionfull@gmail.com',
            name: 'Temirtas',
            followed: true,

        }
    ]
    const endState: UsersStateType = usersReducer(startState, setUsersAC(newUsers))
    expect(Boolean(endState.users.length)).toBe(true)
    expect(endState.users[0].name).toBe(newUsers[0].name)
})
test('users reducer should change totalUsers', ()=>{
    const startState: UsersStateType = {
        users: [],
        pageSize: 12,
        totalUsers: 50,
        currentPage: 2
    }
    let value = 34;
    const endState: UsersStateType = usersReducer(startState, changeTotalUsersAC(value))
    expect(endState.totalUsers).toEqual(value)
})