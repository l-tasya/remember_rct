import React from "react";
import styled from "styled-components";
import logo from '../../../common/img/Purple_Fox.png';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";

type LogoPropsType = {
    title: string
}
export const Logo: React.FC<LogoPropsType> = ({title}) => {
    let color = useSelector<AppStateType, ThemeColorType>(t=>t.settings.themeColor)
    const Container = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    align-items: center;
    justify-content: start;
    `
    const AppLogo = styled.img`
    width: 60px;
    `
    const AppTitle = styled.div`
    font-weight: 900;
    font-size: 18px;
    color: ${color.first}
    `
    return (<Container>
            <AppLogo src={logo} alt="logo doest exist"/>
            <AppTitle>{title}</AppTitle>
        </Container>
    )
}