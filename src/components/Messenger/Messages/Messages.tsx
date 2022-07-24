import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from 'react-router-dom';
import {StyledInput} from '../../../common/components/StyledInput/StyledInput';
import {addMessage, MessagesType} from '../../../redux/reducers/messagesReducer';
import {AppStateType} from "../../../redux/store/store";


type DialogPropsType = {}

export const Messages: React.FC<DialogPropsType> = () => {
    const messages = useSelector<AppStateType, MessagesType>(t=>t.messages)
    const dispatch = useDispatch()
    let {pathname} = useLocation();
    const getID = (pathname: string): string =>{
        return pathname.split('/')[2]
    }
    let dialogID = getID(pathname)

    console.log()
    return (<div>
            {dialogID? messages[dialogID].map(t=><div key={t.id}>{t.message}</div>):<div>Messages</div>}
        {dialogID?<StyledInput label={'New Message'} addItem={(value: string)=>dispatch(addMessage(dialogID,value,true))}/>:''}
        </div>
    )
}