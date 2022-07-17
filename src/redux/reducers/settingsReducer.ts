export type SettingsStateType = {
    themeColor: string,

}
type ActionsType = ReturnType<typeof setColorAC>
type StateType = SettingsStateType

const initialState: StateType = {
    themeColor: 'red'
}

export const settingsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SET-COLOR":{
            const stateCopy = {...state}
            stateCopy.themeColor = action.newValue
            return stateCopy
        }
        default: {
            return state
        }
    }
}
export const setColorAC = (newValue: string) => {
    return {
        type: 'SET-COLOR',
        newValue
    } as const
}