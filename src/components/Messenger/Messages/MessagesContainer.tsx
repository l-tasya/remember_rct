import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addMessageAC, MessagesType} from '../../../redux/reducers/messagesReducer';
import {AppStateType} from "../../../redux/store/store";
import {Messages} from './Messages';
import {useLocation} from "react-router-dom";

export const MessagesContainer: React.FC = () => {
    const messages = useSelector<AppStateType, MessagesType>(t => t.messages)
    const dispatch = useDispatch()

    const addMessage = useCallback((dialogID: string, value: string, isMe: boolean) => {
        dispatch(addMessageAC(dialogID, value, isMe))
    }, [dispatch])

    let {pathname} = useLocation();
    const getID = (pathname: string): string => {
        return pathname.split('/')[3]
    }
    let dialogID = getID(pathname)
    return <Messages
        dialogID={dialogID}
        messages={messages[dialogID]}
        addMessage={addMessage}
    />

}