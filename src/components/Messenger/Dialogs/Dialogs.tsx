import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";
import { DialogsType } from '../../../redux/reducers/dialogsReducer';
import {NavLink} from "react-router-dom";


type DialogPropsType = {}

export const Dialogs: React.FC<DialogPropsType> = () => {
    let color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    let dialogs = useSelector<AppStateType, DialogsType>(t=>t.dialogs)
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
    return (
        <Container>
            {
                dialogs.map((t, i)=><NavLink key={i} to={`${t.id}`}>{t.name}</NavLink>)
            }
        </Container>
    )
}