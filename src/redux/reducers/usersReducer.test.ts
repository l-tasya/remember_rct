import {changeTotalUsersAC, setUsersAC, UsersStateType, usersReducer, UserType, changeIsFetchingAC, changeCurrentPageAC} from "./usersReducer"

test('users reducers should set users', ()=>{
    const startState: UsersStateType = {
        users: [],
        pageSize: 12,
        totalUsers: 50,
        currentPage: 2,
        isFetching: false,
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
        currentPage: 2,
        isFetching: false,
    }
    let value = 34;
    const endState: UsersStateType = usersReducer(startState, changeTotalUsersAC(value))
    expect(endState.totalUsers).toEqual(value)
})
test('users reducer should change isFetching', ()=>{
    const startState: UsersStateType = {
        users: [],
        pageSize: 12,
        totalUsers: 50,
        currentPage: 2,
        isFetching: false,
    }
    let value = true;
    const endState: UsersStateType = usersReducer(startState, changeIsFetchingAC(value))
    expect(endState.isFetching).toEqual(value)
})
test('users reducer should change currentPage', ()=>{
    const startState: UsersStateType = {
        users: [],
        pageSize: 12,
        totalUsers: 50,
        currentPage: 2,
        isFetching: false,
    }
    let value = 3;
    const endState: UsersStateType = usersReducer(startState, changeCurrentPageAC(value))
    expect(endState.currentPage).toEqual(value)
})

