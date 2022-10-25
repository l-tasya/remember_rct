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
import {useTheme} from '@mui/material/styles';
import {StyledBlock} from "../../common/styles/styles";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {Button} from "../../common/styles/mui-styles";

type HeaderPropsType = {
    title: string
}
const Container = styled(StyledBlock)`
            grid-column-start: 1;
            grid-column-end: 3;
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: 1fr;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    z-index: 2;
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
const Settings = styled(SettingsIcon)`
    color: gray;
`
const LogOut = styled(LogoutIcon)`
    color: red;
    padding-left: 2px;
`
export const Header: React.FC<HeaderPropsType> = React.memo(({title}) => {
        //styles
        let theme = useTheme()
    let first = theme.palette.primary.main
    let isAuth = useSelector<AppStateType, boolean>(t => t.auth.isAuth)
        return (
            <Container padding={'none'} radius={'none'}>
                <Logo title={title}/>
                <SearchContainer><Search/></SearchContainer>
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
                    {isAuth ? <Menu icon={'profile'}>
                        <MenuSelect><PersonIcon sx={{color: first}}/><NavLink
                            to={'remember_rct/main/posts'}>Profile</NavLink></MenuSelect>
                        <MenuSelect><Settings/><NavLink to={'remember_rct/Settings'}>Options</NavLink></MenuSelect>
                        <MenuSelect><LogOut sx={{fontSize: 20}}/>Log Out</MenuSelect>
                    </Menu> : <Button variant={'filled'}>login</Button>}
                </BadgesContainer>
            </Container>
        )
    }
)