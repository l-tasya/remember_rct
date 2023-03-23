import {
    changeCurrentPageAC,
    changeIsFetchingAC,
    changeTotalUsersAC,
    changeUserFollowAC, setUserEntityAC,
    setUsersAC,
    usersReducer,
    UsersStateType,
    UserType
} from './usersReducer'
import {RequestStatusType} from '../../App/appReducer';

const startState: UsersStateType = {
    users: [],
    pageSize: 12,
    totalUsers: 50,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [],
    entityStatus: 'idle'
}
test('users reducers should set users', () => {

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
test('users reducer should change totalUsers', () => {
    let value = 34;
    const endState: UsersStateType = usersReducer(startState, changeTotalUsersAC(value))
    expect(endState.totalUsers).toEqual(value)
})
test('users reducer should change isFetching', () => {
    let value = true;
    const endState: UsersStateType = usersReducer(startState, changeIsFetchingAC(value))
    expect(endState.isFetching).toEqual(value)
})
test('users reducer should change currentPage', () => {
    let value = 3;
    const endState: UsersStateType = usersReducer(startState, changeCurrentPageAC(value))
    expect(endState.currentPage).toEqual(value)
})
test('user reducer should change user follow value ', () => {
    let newValue = true
    let id = startState.users[0].id
    const endState: UsersStateType = usersReducer(startState, changeUserFollowAC(id, newValue))
    expect(endState.users.find(t => t.id === id)?.followed).toBe(newValue)
})
test('user reducer should changer entityStatus', () => {
    let newValue: RequestStatusType = 'loading'
    const endState = usersReducer(startState, setUserEntityAC(newValue))
    expect(endState.entityStatus).toEqual(newValue)
})
