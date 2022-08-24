import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store/store";
import {StyledBlock} from "../../../../common/styles/styles";
import {ThemeColorType} from "../../../../redux/reducers/settingsReducer";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../redux/reducers/usersReducer";


export const UserInfo: React.FC = React.memo(() => {
    const Container = styled(StyledBlock)`
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; 
      grid-template-rows: repeat(6,1fr);
      height: 400px;
      min-width: 585px
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
        border: 10px solid white;
        }
       
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
        color: tomato;
  

    `

    const Footer = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 7;
    display: grid;
    margin: 0 5px;
    grid-template-columns: repeat(10, 1fr);
    a{
      display: flex;
      justify-content: center;
      align-items: center;
    }
`

    let user: UserType = useSelector<AppStateType, UserType>(t => t.profile.userInfo)
    let color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)

    let style = (props: { isActive: boolean }) => props.isActive ? {
        borderBottom: `4px solid ${color.first}`,
        transition: '0.3s'
    } : {
        background: 'white',
        transition: '0.3s'
    }
    return (
        <Container>
            <BackGroundEl background={color.second}/>
            <UserAvatar >
                <img src={user.photo.large} alt='profile photo undefined'/>
            </UserAvatar>
            <InfoContainer>
                <Title>{user.name}</Title>
                <SubTitle>{user.status}</SubTitle>
            </InfoContainer>
            <Footer>
                <NavLink style={style} to={'posts'}>Posts</NavLink>
                <NavLink style={style} to={'friends'}>Friends</NavLink>
                <NavLink style={style}  to={'groups'}>Groups</NavLink>
            </Footer>

        </Container>)
})