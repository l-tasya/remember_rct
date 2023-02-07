import {authReducer, AuthStateType, setUserDataAC} from "./authReducer";

test('auth reducer should set user data', () => {
    const startState: AuthStateType = {
        id: 0,
        email: undefined,
        login: undefined,
        isAuth: false,
    }
    let data = {
        id: 333,
        email: 'dalionfull@gmail.com',
        login: 'tasya'
    }
    const endState = authReducer(startState, setUserDataAC(data))
    expect(endState.email).toBe(data.email)
    expect(endState.login).toBe(data.login)
    expect(endState.id).toBe(data.id)
    expect(endState.isAuth).toBe(true)
})