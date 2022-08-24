import React from "react";
import styled from "styled-components";
import purple from '../../../common/img/Purple_Fox.png';
import green from '../../../common/img/Green_Fox_.png';
import blue from '../../../common/img/Blue_Fox.png';
import red from '../../../common/img/Red_Fox.png';
import pink from '../../../common/img/Pink_Fox.png';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";

type LogoPropsType = {
    title: string
}
export const Logo: React.FC<LogoPropsType> = ({title}) => {
    let color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
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
    const colorSwitch = () => {
        switch (color.first) {
            case "#8d59ac":
                return purple
            case "mediumspringgreen":
                return green
            case "#1a74ed":
                return blue
            case "#dc2121":
                return red
            case '#ff0084':
                return pink
        }
    }
    const iMG = colorSwitch()
    return (<Container>
            <AppLogo src={iMG} alt="logo doest exist"/>
            <AppTitle>{title}</AppTitle>
        </Container>
    )
}