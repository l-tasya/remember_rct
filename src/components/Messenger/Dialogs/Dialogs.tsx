import React, {useCallback} from 'react';
import styled from "styled-components";
import {DialogsType} from '../../../redux/reducers/dialogsReducer';
import {AddDialog} from "./AddDialog/AddDialog";
import {Dialog} from "./Dialog/Dialog";
import {StyledBlock} from '../../../common/styles/styles';
import {useTheme} from '@mui/material';
import {Scroll} from '../../../common/styles/mui-styles';


type DialogPropsType = {
    dialogs: DialogsType
    addDialog: (newValue: string) => void
    removeDialog: (dialogID: string) => void

}

const Container = styled.div`
width: 100%;
height: 100%;
position: relative;

`
const Header = styled(StyledBlock)`
display: flex;
height: 10%;
padding: 0 16px;
justify-content: space-between;
align-items: center;

b{
font-weight: 600;
      color: #333;
      font-size: 1.5rem;
}
`
const List = styled(Scroll)`
height: 90%;


`
export const Dialogs: React.FC<DialogPropsType> = React.memo(({dialogs, addDialog, removeDialog}) => {
    let color = useTheme()
    const addDialogCallback = useCallback((newValue: string) => {
        addDialog(newValue)
    }, [addDialog])
    const removeDialogCallback = useCallback((dialogID: string) => {
        removeDialog(dialogID)
    }, [removeDialog])
    return (
        <Container>
            <Header radius={'none'} elevation={'none'} padding='none'><b>Chats</b><AddDialog
                addDialog={addDialogCallback}
                color={color.palette.primary.main}/></Header>
            <List id={'list'}>
                {
                    dialogs.map(t => <Dialog key={t.id} removeDialog={removeDialogCallback} id={t.id}
                                             name={t.name}/>)
                }
            </List>
        </Container>
    )
})