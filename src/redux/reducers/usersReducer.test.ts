import {setUsersAC, StateType, usersReducer, UserType} from "./usersReducer"

test('users reducers should set users', ()=>{
    const startState: StateType = {
        users: []
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
    const endState: StateType = usersReducer(startState, setUsersAC(newUsers))
    expect(Boolean(endState.users.length)).toBe(true)
    expect(endState.users[0].name).toBe(newUsers[0].name)
})