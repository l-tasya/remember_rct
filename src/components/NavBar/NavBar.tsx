import React from "react";
import {NavLink} from "react-router-dom";

import {Headphones, Home, MessageSquare, Settings, ShoppingBag, Users} from "react-feather";
import styled from "styled-components";
import useTheme from "@mui/material/styles/useTheme";
import {StyledBlock} from "../../common/styles/styles";


const Container = styled(StyledBlock)`
    grid-area: navbar;
    background: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    justify-items: center;
    align-items:center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1); 
    height: 100%;
    min-height: 100px;
    position:relative;
    z-index: 3;
    border-right: 0.2px solid gray;
    `
const LastChild = styled.div`
    grid-row-start: 12;
    
    `
const SettingAnimation = styled(Settings)`
@keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}
    transition-property: transform;
    transition-duration: 1s;
    :hover{
        animation-name: rotate; 
    animation-duration: 1500ms; 
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    }
`
export const NavBar: React.FC = () => {
    let theme = useTheme()
    let style = (props: { isActive: boolean }) => props.isActive ? {
        color: theme.palette.primary.main,
    } : {
        color: theme.palette.text.primary
    }
    return (
        <Container id={"nav"} padding={"none"} radius={"none"}>
            <NavLink style={style} to={"remember_rct/"}><Home size={30}/></NavLink>
            <NavLink style={style} to={"/remember_rct/messenger"}><MessageSquare size={30}/></NavLink>
            <NavLink style={style} to={"remember_rct/users"}><Users size={30}/></NavLink>
            <NavLink style={style} to={"remember_rct/store"}><ShoppingBag size={30}/></NavLink>
            <NavLink style={style} to={"remember_rct/music"}><Headphones size={30}/></NavLink>
            <LastChild><NavLink style={style} to={"remember_rct/settings"}><SettingAnimation
                size={30}/></NavLink></LastChild>
        </Container>
    )
}