import {v1} from "uuid";

export type SettingsStateType = {
    themeColor: ThemeColorType
    themes: ThemesArrayType

}
export type ThemeType = {
    id: string
    first: string
    second: string
}
export type ThemesArrayType = ThemeType[]
type ActionsType = ReturnType<typeof setColorAC>
| ReturnType<typeof addThemeAC>
type StateType = SettingsStateType
export type ThemeColorType = {
    first: string
    second: string
}
const initialState: StateType = {
    themeColor: {
        first: '#1a74ed',
        second: '#84bbff'
    },
    themes:  [
        {id: v1(), first: '#8d59ac', second: '#ca87ff'},
        {id: v1(), first: 'mediumspringgreen', second: '#98ff98'},
        {id: v1(), first: '#1a74ed', second: '#84bbff'},
        {id: v1(), first: '#dc2121', second: '#e38585'},
        {id: v1(), first: '#ff0084', second: '#ff8bc0'},
    ]
}
export const settingsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    function componentToHex(c: any) {
        let value = c>200?c:c+60
        var hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    switch (action.type) {
        case "SET-COLOR":{
            const stateCopy = {...state}
            let theme = stateCopy.themes.find(t=>t.id === action.id)
            if(theme){
                stateCopy.themeColor = {
                first: theme.first,
                second: theme.second,
            }
            }
            return stateCopy
        }
        case "ADD-THEME":{
            const stateCopy = {...state}
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(action.value);
            let rgb = null
            if(result){
                rgb = {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                }
            }

            let first = action.value
            let second = rgb? "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b):''
            let newTheme: ThemeType = {id: v1(), first: first.toString(), second: second.toString()}
            stateCopy.themes = [...stateCopy.themes, newTheme]
            return stateCopy
        }
        default: {
            return state
        }
    }
}
export const setColorAC = (id:  string) => {
    return {
        type: 'SET-COLOR',
        id
    } as const
}
export const addThemeAC = (value: string) =>{
    return {
        type: 'ADD-THEME',
        value
    }as const
}