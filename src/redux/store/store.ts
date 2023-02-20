import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {dialogsReducer} from "../reducers/dialogsReducer";
import {profileReducer} from "../reducers/profileReducer"
import {settingsReducer} from "../reducers/settingsReducer";
import {messagesReducer} from "../reducers/messagesReducer";
import {usersReducer} from "../reducers/usersReducer";
import {authReducer} from "../reducers/authReducer";
import thunk from 'redux-thunk';
import {appReducer} from '../reducers/appReducer';


export type AppStateType = ReturnType<typeof reducers>


const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    settings: settingsReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer,
    users: usersReducer,
    app: appReducer
})
//TODO: add localStorage util
export const store = legacy_createStore(reducers, applyMiddleware(thunk))
// @ts-ignore
window.store = store