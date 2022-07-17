import React from 'react';
import styled from 'styled-components';
import {Logo} from "./Logo/Logo";
import {Search} from "../../common/components/Search/Search";
import {Menu} from "../../common/components/Menu/Menu";
import {MenuSelect} from '../../common/components/Menu/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    title: string
}
export const Header: React.FC<HeaderPropsType> = ({title}) => {
    //styles
    const ContainerGrid = styled.div`
            grid-column-start: 1;
            grid-column-end: 3;

            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: 1fr;
    `
    const Container = styled(ContainerGrid)`
    background: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    z-index: 1;
    position: fixed; 
    top: 0; 
    width: 100%;
    height: 60px;
    align-items: center;
    `
    const SearchContainer = styled.div`
    grid-column-start: 4;
    position: absolute;
`
    const BadgesContainer = styled.div`
      display: flex;
      grid-column-start: 7;
      grid-column-end: 9;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      padding: 0 45px;
      
      
`
    const Profile = styled(PersonIcon)`
    color: #b986fc;
    font-size: 10px;
`
    const Settings = styled(SettingsIcon)`
    color: black;
    font-size: 10px;
`
    const LogOut = styled(LogoutIcon)`
    color: palevioletred;
    font-size: 10px;
`
    return (
        <Container>
            <Logo title={title}/>
            <SearchContainer><Search background={'#d4ddea'} hoverColor={'#c9a3fc'}/></SearchContainer>
            <BadgesContainer>
                <Menu icon={'store'}>
                    <MenuSelect>(empty) </MenuSelect>
                </Menu>
                <Menu icon={'notifications'}>
                    <MenuSelect>notifications: 15</MenuSelect>
                </Menu>
                <Menu icon={'messages'}>
                    <MenuSelect>messages</MenuSelect>
                    <MenuSelect>messages</MenuSelect>
                    <MenuSelect>messages</MenuSelect>
                </Menu>
                <Menu icon={'profile'}>
                    <MenuSelect><Profile/><NavLink to={'/Profile'}>Profile</NavLink></MenuSelect>
                    <MenuSelect><Settings/><NavLink to={'/Settings'}>Options</NavLink></MenuSelect>
                    <MenuSelect><LogOut/>Log Out</MenuSelect>
                </Menu>
            </BadgesContainer>
        </Container>
    )
}