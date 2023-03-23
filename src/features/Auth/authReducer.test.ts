import {authReducer, InitialState, setUserDataAC} from './authReducer';

test('auth reducer should set user data', () => {
    const startState: InitialState = {
        id: 0,
        email: undefined,
        login: undefined,
        isAuth: false,
        profile: null,
        entity: 'idle',
        captcha: '',
    }
    let data = {
        id: 333,
        email: 'dalionfull@gmail.com',
        login: 'tasya',
        isAuth: true,
    }
    const endState = authReducer(startState, setUserDataAC(data))
    expect(endState.email).toBe(data.email)
    expect(endState.login).toBe(data.login)
    expect(endState.id).toBe(data.id)
    expect(endState.isAuth).toBe(data.isAuth)
})