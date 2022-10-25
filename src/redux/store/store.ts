import {combineReducers, createStore} from "redux"
import { dialogsReducer } from "../reducers/dialogsReducer";
import {profileReducer} from "../reducers/profileReducer"
import {settingsReducer} from "../reducers/settingsReducer";
import {messagesReducer} from "../reducers/messagesReducer";
import {usersReducer} from "../reducers/usersReducer";
import {authReducer} from "../reducers/authReducer";

export type AppStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    settings: settingsReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer,
    users: usersReducer,
})

export const store = createStore(reducers)
// @ts-ignore
window.store = store