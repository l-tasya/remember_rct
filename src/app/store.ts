import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {dialogsReducer} from "../features/Messenger/Dialogs/dialogsReducer";
import {profileReducer} from "../features/Profile/profileReducer"
import {settingsReducer} from "../features/Settings/settingsReducer";
import {messagesReducer} from "../features/Messenger/Messages/messagesReducer";
import {usersReducer} from "../features/Users/reducers/usersReducer";
import {authReducer} from "../features/Auth/authReducer";
import thunk from 'redux-thunk';
import {appReducer} from '../features/App/appReducer';


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