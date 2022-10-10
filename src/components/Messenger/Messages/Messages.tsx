import React, {useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import {StyledInput} from '../../../common/components/StyledInput/StyledInput';
import {MessagesType} from '../../../redux/reducers/messagesReducer';


type MessagesPropsType = {
    messages: MessagesType
    addMessage: (dialogID: string, value: string, isMe: boolean) => void
}

export const Messages: React.FC<MessagesPropsType> = ({messages, addMessage}) => {
    let {pathname} = useLocation();
    const getID = (pathname: string): string => {
        return pathname.split('/')[3]
    }
    let dialogID = getID(pathname)
    const addMessageCallback = useCallback((value: string) => {
        addMessage(dialogID, value, true)
    }, [addMessage, dialogID])
    //TODO: style of Messages, use isMe variable

    return (<div>
            {dialogID ? messages[dialogID].map(t => <div key={t.id}>{t.message}</div>) : <div>Messages</div>}
            {dialogID ? <StyledInput addItem={addMessageCallback}/> : ''}
        </div>
    )
}