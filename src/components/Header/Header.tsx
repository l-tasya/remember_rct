import React from "react";
import styled from "styled-components";
import {Logo} from "./Logo/Logo";
import {Search} from "../../common/components/Search/Search";
import {Menu} from "../../common/components/Menu/Menu";
import {MenuSelect} from "../../common/components/Menu/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import {NavLink} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import {StyledBlock} from "../../common/styles/styles";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {ProfileBadge, Title} from "../../common/styles/mui-styles";
import {AuthStateType} from "../../redux/reducers/authReducer";
import {DialogType} from "../../redux/reducers/dialogsReducer";
import {defaultUser} from "../../redux/reducers/profileReducer";
import Button from "@mui/material/Button/Button";

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
      max-height: 65px;
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
      font-weight: 900;
      font-size: 19px;
`
const Navigation = styled.div`
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
    let theme = useTheme()

    let first = theme.palette.primary.main
    let auth = useSelector<AppStateType, AuthStateType>(t => t.auth)
    let dialogs = useSelector<AppStateType, DialogType[]>(t => t.dialogs.dialogs)
    let profileIMG = defaultUser.photos.large;
    const authMenuItem = auth.isAuth ?
        <Menu svg={<ProfileBadge src={profileIMG}/>}>
            <MenuSelect svg={<PersonIcon sx={{color: first}}/>}
                        to={`remember_rct/${auth.id}/posts`}>{auth.login}</MenuSelect>
            <MenuSelect svg={<Settings/>}
                        to={`remember_rct/Settings`}>Options</MenuSelect>
            <MenuSelect svg={<LogOut sx={{fontSize: 20}}/>} to={"remember_rct/login"}>Log
                Out</MenuSelect>
        </Menu>
        :
        <NavLink to={"remember_rct/login"}>
            <Button size={"small"} variant={"contained"}>login</Button>
        </NavLink>
    return (
        <Container padding={"none"} radius={"none"}>
            <Logo/>

            <Content>
                <ContentTitle value={"main"}>{title}</ContentTitle>
                <SearchContainer><Search/></SearchContainer>
                <Navigation>
                    <Menu svg={<LocalGroceryStoreIcon/>}>
                        <MenuSelect to={""}>
                            (empty)
                        </MenuSelect>
                    </Menu>
                    <Menu svg={<NotificationsIcon/>}>
                        <MenuSelect to={""}>notifications: 15</MenuSelect>
                    </Menu>
                    <Menu svg={<ChatIcon/>}>
                        {dialogs.map(d => <MenuSelect to={`remember_rct/messenger/${d.id}`}
                                                      key={d.id}>{d.name}</MenuSelect>)}
                    </Menu>
                    {
                        authMenuItem
                        }
                    </Navigation>
                </Content>
            </Container>
        )
    }
)