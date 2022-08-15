import {setUsersAC, StateType, usersReducer, UserType} from "./usersReducer"
import {v1} from "uuid";
test('users reducers should set users', ()=>{
    const startState: StateType = {
        users: []
    }
    let newUsers: UserType[] = [
        {
            id: v1(),
            photo: '',
            eMail: 'dalionfull@gmail.com',
            surname: 'Nursain',
            name: 'Temirtas'
        }
    ]
    const endState: StateType = usersReducer(startState, setUsersAC(newUsers))
    expect(Boolean(endState.users.length)).toBe(true)
    expect(endState.users[0].name).toBe(newUsers[0].name)
})