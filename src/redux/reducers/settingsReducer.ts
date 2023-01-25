import {v1} from "uuid";

export type SettingsStateType = {
    active: string
    themes: ThemesType

}
export type ThemeType = {
    id: string
    first: string
}
export type ThemesType = ThemeType[]
type ActionsType = ReturnType<typeof setColorAC>
    | ReturnType<typeof addThemeAC>
type StateType = SettingsStateType
export type ThemeColorType = {
    first: string
    second: string
}
const initialState: StateType = {
    active: 'default',
    themes:  [
        {id: v1(), first: '#8d59ac',},
        {id: v1(), first: '#198219',},
        {id: v1(), first: '#004080',},
        {id: v1(), first: '#1a74ed',},
        {id: v1(), first: '#dc2121',},
        {id: v1(), first: '#ff0084',},
        {id: 'default', first: '#0055ff',},
    ]
}
export const settingsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SET-COLOR":{
            const stateCopy = {...state}
            stateCopy.active = action.id
            return stateCopy
        }
        case "ADD-THEME":{
            const stateCopy = {...state}

            let first = action.value
            let newTheme: ThemeType = {id: v1(), first: first.toString()}
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