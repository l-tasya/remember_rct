import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addMessageAC, MessagesType} from '../../../redux/reducers/messagesReducer';
import {AppStateType} from "../../../redux/store/store";
import {Messages} from './Messages';

export const MessagesContainer: React.FC = () => {
    const messages = useSelector<AppStateType, MessagesType>(t => t.messages)
    const dispatch = useDispatch()

    const addMessage = useCallback((dialogID: string, value: string, isMe: boolean) => {
        dispatch(addMessageAC(dialogID, value, isMe))
    }, [dispatch])
    return <Messages
        messages={messages}
        addMessage={addMessage}
    />

}