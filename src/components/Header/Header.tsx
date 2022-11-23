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
import {Title} from "../../common/styles/mui-styles";
import {AuthStateType} from "../../redux/reducers/authReducer";

type HeaderPropsType = {
    title: string
}
const Container = styled(StyledBlock)`
      grid-area: header;
      position: relative;
      grid-column-start: 1;
      grid-column-end: 3;
      display: grid;
      grid-template-columns: 65px 1fr;
      grid-template-rows: 1fr;
-webkit-box-shadow: 3px 2px 8px -5px rgba(34, 60, 80, 0.6);
-moz-box-shadow: 3px 2px 8px -5px rgba(34, 60, 80, 0.6);
box-shadow: 3px 2px 8px -5px rgba(34, 60, 80, 0.6);
      align-items: center;
      z-index: 4;
    `
const Content = styled.div`
      display: grid;
      height: 100%;
      grid-template-columns: repeat(6, 1fr);
      padding: 0 30px 0 0;
`
const SearchContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column-start: 3;
      grid-column-end:5 ;
`
const ContentTitle = styled(Title)`
      justify-self: flex-start;
      align-self: center;
`
const BadgesContainer = styled.div`
      display: flex;
      grid-column-start: 6;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      
      
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
    let auth = useSelector<AppStateType, AuthStateType>(t => t.auth)
    return (
        <Container padding={'none'} radius={'none'}>
            <Logo/>
            <Content>
                <ContentTitle value={'main'} sx={{fontWeight: 900, fontSize: 18,}}>{title}</ContentTitle>
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
                    {auth.isAuth ? <Menu icon={'profile'}>
                        <MenuSelect><PersonIcon sx={{color: first}}/><NavLink
                            to={`remember_rct/main/posts`}>{auth.login}</NavLink></MenuSelect>
                        <MenuSelect><Settings/><NavLink to={`remember_rct/Settings`}>Options</NavLink></MenuSelect>
                        <MenuSelect><LogOut sx={{fontSize: 20}}/>Log Out</MenuSelect>
                    </Menu> : <Button variant={'filled'}>login</Button>}
                </BadgesContainer>
            </Content>
        </Container>
        )
    }
)