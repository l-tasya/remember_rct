import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";
import {addDialogAC, DialogsType, removeDialogAC} from '../../../redux/reducers/dialogsReducer';
import {AddDialog} from "./AddDialog/AddDialog";
import {Dialog} from "./Dialog/Dialog";


type DialogPropsType = {}

export const Dialogs: React.FC<DialogPropsType> = React.memo(() => {
    let color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    let dialogs = useSelector<AppStateType, DialogsType>(t => t.dialogs)
    const dispatch = useDispatch()
    const Container = styled.div`
    display: grid;
    border-right: 0.3px solid rgb(211,211,211, 0.3);
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(20, 50px);
    overflow-y: scroll;
    //firefox
    scrollbar-color: ${color.first} white;
    scrollbar-width: thin;
    //google chrome
    ::-webkit-scrollbar {
    height: 10px;
    width: 5px;
    background: white;
    }
    ::-webkit-scrollbar-thumb {
    background: ${color.first};
}

::-webkit-scrollbar-corner {
    background: #000;
}
`
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
    const addDialog = (newValue: string) => {
        dispatch(addDialogAC(newValue))
    }
    const removeDialog = (dialogID: string) =>{
        dispatch(removeDialogAC(dialogID))
    }
    return (
        <Container>
            <Header><Title>Chats</Title><AddDialog addDialog={addDialog} color={color.first}/></Header>
            {
                dialogs.map(t=> <Dialog removeDialog={removeDialog} id={t.id} name={t.name}/>)
            }
        </Container>
    )
})