import {v1} from "uuid";
import {ColorValueType} from "../../components/Settings/Settings";

export type SettingsStateType = {
    themeColor: ThemeColorType
    themes: ThemesArrayType

}
export type ThemesArrayType = {
    id: string
    value: ColorValueType
    first: string
    second: string
}[]
type ActionsType = ReturnType<typeof setColorAC>
type StateType = SettingsStateType
export type ThemeColorType = {
    first: string
    second: string
}
const initialState: StateType = {
    themeColor: {
        first: '#8d59ac',
        second: '#ca87ff'
    },
    themes:  [
        {id: v1(), value: 'purple', first: '#8d59ac', second: '#ca87ff'},
        {id: v1(), value: 'green', first: '#01d201', second: '#98ff98'},
        {id: v1(), value: 'blue', first: '#1a74ed', second: '#84bbff'},
        {id: v1(), value: 'red', first: '#dc2121', second: '#e38585'},
        {id: v1(), value: 'pink', first: '#ff0084', second: '#ff8bc0'},
    ]
}

export const settingsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SET-COLOR":{
            const stateCopy = {...state}
            let theme = stateCopy.themes.find(t=>t.value === action.newValue)
            if(theme){
                stateCopy.themeColor = {
                first: theme.first,
                second: theme.second,
            }
            }
            return stateCopy
        }
        default: {
            return state
        }
    }
}
export const setColorAC = (newValue:  ColorValueType) => {
    return {
        type: 'SET-COLOR',
        newValue
    } as const
}