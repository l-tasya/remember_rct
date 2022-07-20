import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store/store";
import {UserType} from "../../../../redux/reducers/profileReducer";
import {StyledBlock} from "../../../../common/styles/styles";
import {ThemeColorType} from "../../../../redux/reducers/settingsReducer";
import {NavLink} from "react-router-dom";


export const UserInfo: React.FC = () => {
    const Container = styled(StyledBlock)`
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; 
      grid-template-rows: repeat(6,1fr);
      height: 400px;
    `
    const BackGroundEl = styled.div`
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 4;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: ${(props: { background: string }) => props.background}
    `
    const UserAvatar = styled.div`
        grid-column-start: 2;
        grid-row-start: 2;
        grid-row-end: 4;
       display: flex;
       justify-content: center;
       align-items: center;
        img{
        position: relative;
        top: 5px;
        display: flex;
        justify-self: center;
        width: 152px;
        height: 152px;
        border-radius: 50%;
        border: 10px solid white;}
       
    `
    const InfoContainer = styled.div`
        grid-column-start: 2;
        grid-row-start: 4;
        grid-row-end: 6;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
`
    const Title = styled.div`
        font-size: 30px;
        color: gray;
        text-transform: capitalize;
        font-weight: 600;
    `
    const SubTitle = styled.div`
        color: lightgreen;
  

    `
    const Footer = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 7;
    background: #b986fc;
    display: grid;
    margin: 0 5px;
    grid-template-columns: repeat(10, 1fr);
`
    const FooterItem = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white
`
    let user: UserType = useSelector<AppStateType, UserType>(t => t.profile.userInfo)
    let color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    return (
        <Container>
            <BackGroundEl background={color.first}/>
            <UserAvatar >
                <img src={user.photo} alt='profile photo undefined'/>
            </UserAvatar>
            <InfoContainer>
                <Title>{user.name} {user.surname}</Title>
                <SubTitle>{user.eMail}</SubTitle>
            </InfoContainer>
            <Footer>
                <FooterItem to={'posts'}>posts</FooterItem>
                <FooterItem to={'friends'}>friends</FooterItem>
                <FooterItem to={'groups'}>groups</FooterItem>
            </Footer>

        </Container>)
}