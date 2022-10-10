import React, { useCallback } from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";
import {DialogsType} from '../../../redux/reducers/dialogsReducer';
import {AddDialog} from "./AddDialog/AddDialog";
import {Dialog} from "./Dialog/Dialog";


type DialogPropsType = {
    dialogs: DialogsType
    addDialog: (newValue: string) => void
    removeDialog: (dialogID: string) => void

}

export const Dialogs: React.FC<DialogPropsType> = React.memo(({dialogs, addDialog, removeDialog}) => {
    let color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    const Container = styled.div`\n    display: grid;\n    border-right: 0.3px solid rgb(211,211,211, 0.3);\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(20, 50px);\n    overflow-y: scroll;\n    //firefox\n    scrollbar-color: ${color.first} white;\n    scrollbar-width: thin;\n    //google chrome\n    ::-webkit-scrollbar {\n    height: 10px;\n    width: 5px;\n    background: white;\n    }\n    ::-webkit-scrollbar-thumb {\n    background: ${color.first};\n}\n\n::-webkit-scrollbar-corner {\n    background: #000;\n}\n`
    const Title = styled.div`
      font-weight: 600;
      font-size: 1.5rem;
      color: #333;
`
    const Header = styled.div`
    border: 0.3px solid rgb(211,211,211, 0.3);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

`
    const addDialogCallback = useCallback((newValue: string) => {
        addDialog(newValue)
    }, [addDialog])
    const removeDialogCallback = useCallback((dialogID: string) => {
        removeDialog(dialogID)
    },[removeDialog])
    return (
        <Container>
            <Header><Title>Chats</Title><AddDialog addDialog={addDialogCallback} color={color.first}/></Header>
            {
                dialogs.map(t => <Dialog key={t.id} removeDialog={removeDialogCallback} id={t.id} name={t.name}/>)
            }
        </Container>
    )
})