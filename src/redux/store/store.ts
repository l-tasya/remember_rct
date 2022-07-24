import {combineReducers, createStore} from "redux"
import { dialogsReducer } from "../reducers/dialogsReducer";
import {profileReducer} from "../reducers/profileReducer"
import {settingsReducer} from "../reducers/settingsReducer";
import {messagesReducer} from "../reducers/messagesReducer";

export type AppStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profile: profileReducer,
    settings: settingsReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer,
})

export const store = createStore(reducers)