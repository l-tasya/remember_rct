import {addThemeAC, setColorAC, settingsReducer, SettingsStateType} from "./settingsReducer"
import {v1} from "uuid";

test('settingReducer should change theme color', () => {
    const startState: SettingsStateType = {
        active: '',
        themes:  [
            {id: v1(), first: '#8d59ac',},
            {id: v1(), first: 'mediumspringgreen',},
            {id: v1(), first: '#1a74ed',},
            {id: v1(), first: '#dc2121',},
            {id: v1(), first: '#ff0084',},
        ]
    }
    const id = startState.themes[3].id
    const endState = settingsReducer(startState, setColorAC(id))
    expect(endState.active).toBe(id)
})
test('settingReducer should add theme color', () => {
    const startState: SettingsStateType = {
        active: '',
        themes: [
            {id: v1(), first: '#8d59ac',},
            {id: v1(), first: 'mediumspringgreen',},
            {id: v1(), first: '#1a74ed',},
            {id: v1(), first: '#dc2121',},
            {id: v1(), first: '#ff0084',},
        ]
    }
    let newValue = '#a34848'

    const endState = settingsReducer(startState, addThemeAC(newValue))
    expect(endState.themes[5].first).toBe('#a34848')
})