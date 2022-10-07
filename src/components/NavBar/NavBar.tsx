import React from "react";
import {NavLink} from "react-router-dom";

import {Headphones, Home, MessageSquare, Settings, ShoppingBag, Users} from "react-feather";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {ThemeColorType} from "../../redux/reducers/settingsReducer";


type NavbarPropsType = {}
export const NavBar: React.FC<NavbarPropsType> = React.memo(() => {
    const color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    justify-items: center;
    align-items:center;
 
    `
    const Container = styled(ContainerGrid)`
    background: white;

    --tw-border-opacity: 2;
    border-right: 1px solid rgba(229,231,235,var(--tw-border-opacity));
    position: fixed; 
    top: 60px;
    width: 60px; 
    height: 100%;
    `
    let style = (props: { isActive: boolean }) => props.isActive ? {
        color: color.second,
    } : {
        color: 'black'
    }
    const LastChild = styled.div`
    grid-row-start: 11;
    
    `
    const SettingAnimation = styled(Settings)`
    :hover{
    transform: rotate(360deg);
    transition-duration: 3s;
    animation-timing-function: linear;
    }
`
    return (
        <Container>
            <NavLink style={style} to={'remember_rct/'}><Home size={30}/></NavLink>
            <NavLink style={style} to={'/remember_rct/messenger'}><MessageSquare size={30}/></NavLink>
            <NavLink style={style} to={'remember_rct/users'}><Users size={30}/></NavLink>
            <NavLink style={style} to={'remember_rct/store'}><ShoppingBag size={30}/></NavLink>
            <NavLink style={style} to={'remember_rct/music'}><Headphones size={30}/></NavLink>
            <LastChild><NavLink style={style} to={'remember_rct/settings'}><SettingAnimation size={30}/></NavLink></LastChild>
        </Container>
    )
})