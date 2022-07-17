import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store/store";
import {UserType} from "../../../../redux/reducers/profileReducer";


export const UserInfo: React.FC = () => {
    const Container = styled.div`
    
    `
    const BackGroundEl = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 250px;
        background: ${(props: {background: string})=>props.background}
    `
    const UserAvatar = styled.img`
        width: 152px;
        height: 152px;
        border-radius: 50%;
        border: 10px solid white;
    `
    const Title = styled.div`
        font-size: 30px;
        margin-bottom: 17px;
        margin-top: 10px;
        color: white;
        text-transform: capitalize;
        font-weight: 600;
    `
    const SubTitle = styled.div`
        color: lightgreen;
        padding-bottom: 14px;
  

    `
    let user: UserType = useSelector<AppStateType, UserType>(t => t.profile.userInfo)
    return (
        <Container>
            <BackGroundEl background={'tomato'}/>
            <UserAvatar src={user.photo}/>
            <Title>{user.name} {user.surname}</Title>
            <SubTitle>{user.eMail}</SubTitle>

        </Container>)
}