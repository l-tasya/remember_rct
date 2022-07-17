
type SettingsStateType = {
    themeColor: string,

}
type StateType = SettingsStateType
const initialState: StateType = {
    themeColor: 'red'
}

export const settingsReducer = (state: StateType = initialState, action: string):StateType =>{
    switch (action) {
        default:{
            return state
        }
    }
}