import {appReducer, InitialStateType, RequestStatusType, setAppInitializeAC} from './appReducer';

const startState: InitialStateType = {
    status: 'idle',
    error: null,
    alertMessage: null,
    initialize: 'loading',
}
test('sdfjas;l', () => {
    let newValue: RequestStatusType = 'succeeded'
    const endState = appReducer(startState, setAppInitializeAC(newValue))
    expect(endState.initialize).toEqual(newValue)
})
