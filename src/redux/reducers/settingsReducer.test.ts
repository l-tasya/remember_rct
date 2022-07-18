import {setColorAC, settingsReducer, SettingsStateType} from "./settingsReducer"
import {v1} from "uuid";
import {ColorValueType} from "../../components/Settings/Settings";

test('settingReducer should change theme color', () => {
    const startState: SettingsStateType = {
        themeColor: {
            first: '#7c5ba1',
            second: '#c9a3fc'
        },
        themes: [
            {id: v1(), value: 'purple', first: '#7c5ba1', second: '#c9a3fc'},
            {id: v1(), value: 'green', first: '#01d201', second: '#98ff98'},
            {id: v1(), value: 'blue', first: '#1a74ed', second: '#84bbff'},
            {id: v1(), value: 'red', first: '#dc2121', second: '#e38585'},
            {id: v1(), value: 'pink', first: '#ff0084', second: '#ff8bc0'},
        ]
    }
    let theme = startState.themes.find(t => t.value === "pink")

    const newColor: ColorValueType = 'pink'
    const endState = settingsReducer(startState, setColorAC(newColor))
    expect(endState.themeColor.first).toBe(theme?.first)
    expect(endState.themeColor.second).toBe(theme?.second)
})