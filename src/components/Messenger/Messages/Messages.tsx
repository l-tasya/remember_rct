import React, {useCallback} from 'react';
import {StyledInput} from '../../../common/components/StyledInput/StyledInput';
import {MessageType} from '../../../redux/reducers/messagesReducer';
import styled from 'styled-components';
import {useTheme} from '@mui/material/styles';
import {Scroll, Title} from '../../../common/styles/mui-styles';
import {AppStateType} from '../../../redux/store/store';
import {useSelector} from 'react-redux';
import {DialogType} from '../../../redux/reducers/dialogsReducer';

type MessagesPropsType = {
    dialogID: string
    messages: MessageType[]
    addMessage: (dialogID: string, value: string, isMe: boolean) => void
}
const Container = styled.div`
    display: grid;
    height: 100%;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 1fr 10%;
`
const Header = styled(Title)`
height: 100%;

padding: 0 16px;

font-size: 1.5rem;
font-weight: 600;
margin-bottom: 1px;
position: relative;
 border-bottom: 0.2px solid gray;
`
const List = styled(Scroll)`
grid-row-start: 2;
position: absolute;
top: 2px;
width: 100%;
height: 88%;
    display: flex;
    flex-direction: column;
   
`
const Footer = styled.div`
border-top: 0.2px solid gray;
grid-row-start: 3;
display: flex;
justify-content: center;
align-items: center;
`
const Message = styled.div`
    display: inline-block;
    background: white;
    margin: 3px;
    padding: 5px 10px 14px 10px;
    border-radius: 6px;
    position: relative;
    font-size: 17px;
    min-width: 40px;
    span{
    position: absolute;
    bottom: 2px;
    right: 10px;
    font-size: 10px;
    font-weight: 400;
    }
    
`
const MessageSent = styled(Message)`
 position: relative;
 background: ${(props: { color: string }) => props.color};
 color: white;
 font-weight: 400;
 align-self: flex-end;
 margin-right: 20px;
 &:after{
  content: "";
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid ${(props: { color: string }) => props.color};
  border-right: none;
  position: absolute;
  right: -6px;
  top: 40%;
}
`
const MessageAccepted = styled(Message)`
color: rgb(102, 102, 102);
background: #f4f4f4;
 align-self: flex-start;
  margin-left: 20px;
  position: relative;
  &:before{
  content: "";
width: 0;
height: 0;
border-top: 7px solid transparent;
border-bottom: 7px solid transparent;
border-right: 7px solid #f4f4f4;
position: absolute;
left: -6px;
right: auto;
  top: 40%;
  }
 
`
const AlertMessage = styled.div`
margin: 0 auto;
position: absolute;
top: 0;
font-size: 19px;
height: 100%;
width: 100%;
text-align: center;
color: gray;
font-weight: 600;
`
export const Messages: React.FC<MessagesPropsType> = ({messages, addMessage, dialogID}) => {

    const addMessageCallback = useCallback((value: string) => {
        addMessage(dialogID, value, true)
    }, [addMessage, dialogID])
    const dialogs = useSelector<AppStateType, DialogType[]>(t => t.dialogs.dialogs)
    let theme = useTheme()
    return (<Container>
            <Header sx={{display: 'flex', alignItems: 'center'}}
                    value={'main'}>{dialogs.find(t => t.id === dialogID)?.name}</Header>
            <List>
                {dialogID ? messages.map(t => t.isMe ?
                    <MessageSent color={theme.palette.primary.main}
                                 key={t.id}>{t.message}<span>{t.time}</span></MessageSent> :
                    <MessageAccepted key={t.id}>{t.message}<span>{t.time}</span></MessageAccepted>) :
                    <AlertMessage>Select Dialog</AlertMessage>}
            </List>
            <Footer>
                {dialogID ? <StyledInput addItem={addMessageCallback}/> : ''}
            </Footer>
        </Container>
    )
}