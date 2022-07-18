import {combineReducers, createStore} from "redux"
import {profileReducer} from "../reducers/profileReducer"
import {settingsReducer} from "../reducers/settingsReducer";

export type AppStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profile: profileReducer,
    settings: settingsReducer
})

export const store = createStore(reducers)