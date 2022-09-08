import {addThemeAC, setColorAC, settingsReducer, SettingsStateType} from "./settingsReducer"
import {v1} from "uuid";

test('settingReducer should change theme color', () => {
    const startState: SettingsStateType = {
        themeColor: {
            first: '#7c5ba1',
            second: '#c9a3fc'
        },
        themes:  [
            {id: v1(), first: '#8d59ac', second: '#ca87ff'},
            {id: v1(), first: 'mediumspringgreen', second: '#98ff98'},
            {id: v1(), first: '#1a74ed', second: '#84bbff'},
            {id: v1(), first: '#dc2121', second: '#e38585'},
            {id: v1(), first: '#ff0084', second: '#ff8bc0'},
        ]
    }
    let theme = startState.themes.find(t => t.id === id)

    const id = startState.themes[3].id
    const endState = settingsReducer(startState, setColorAC(id))
    expect(endState.themeColor.first).toBe(theme?.first)
    expect(endState.themeColor.second).toBe(theme?.second)
})
test('settingReducer should add theme color', () => {
    const startState: SettingsStateType = {
        themeColor: {
            first: '#7c5ba1',
            second: '#c9a3fc'
        },
        themes:  [
            {id: v1(), first: '#8d59ac', second: '#ca87ff'},
            {id: v1(), first: 'mediumspringgreen', second: '#98ff98'},
            {id: v1(), first: '#1a74ed', second: '#84bbff'},
            {id: v1(), first: '#dc2121', second: '#e38585'},
            {id: v1(), first: '#ff0084', second: '#ff8bc0'},
        ]
    }
    let newValue = '#a34848'

    const endState = settingsReducer(startState, addThemeAC(newValue))
    expect(endState.themes[5].first).toBe('#a34848')
    expect(endState.themes[5].second).toBe('#df8484')
})