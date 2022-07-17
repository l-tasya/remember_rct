import {setColorAC, settingsReducer, SettingsStateType} from "./settingsReducer"

test('settingReducer should change theme color', ()=>{
    const startState: SettingsStateType = {
        themeColor: 'red'
    }
    const newColor: string = 'blue'
    const endState = settingsReducer(startState, setColorAC(newColor))
    expect(endState.themeColor).toBe(newColor)
})