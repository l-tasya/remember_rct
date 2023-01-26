import React, {useState} from "react";
import styled from "styled-components";
import {StyledBlock} from "../../../../common/styles/styles";
import {NavLink} from "react-router-dom";
import {ProfileUserType} from "../../../../redux/reducers/profileReducer";
import {useTheme} from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import {EditableTitle} from "../../../../common/components/EditableTitle/EditableTitle";

type UserInfoPropsType = {
    user: ProfileUserType
}
const Container = styled(StyledBlock)`
      padding: 0;
      overflow: hidden;
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
const SubTitle = styled.div`
  

    `
const Title = styled.div`
        font-size: 30px;
        color: rgb(62,62,62);
        text-transform: capitalize;
        font-weight: 600;
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


export const UserInfo: React.FC<UserInfoPropsType> = React.memo(({user}) => {
    let theme = useTheme()

    let style = (props: { isActive: boolean }) => props.isActive ? {
        borderBottom: `4px solid ${theme.palette.primary.main}`,
        transition: "0.3s"
    } : {
        background: "white",
        transition: "0.3s"
    }
    let img = user.photos.large ? <img src={user.photos.large} alt={"error"}/> : <PersonIcon/>
    let [title, setTitle] = useState("I am front-end developer")


    return (
        <Container>
            <BackGroundEl background={theme.palette.primary.light}/>
            <UserAvatar>
                {img}
            </UserAvatar>
            <InfoContainer>
                <Title>{user.fullName}</Title>
                <SubTitle>
                    {
                        user.aboutMe ?
                            <EditableTitle title={title} c1={setTitle}/>
                            :
                            "Add information about you"

                    }
                </SubTitle>
            </InfoContainer>
            <Footer>
                <NavLink style={style} to={"posts"}>Posts</NavLink>
                <NavLink style={style} to={"friends"}>Friends</NavLink>
                <NavLink style={style} to={"groups"}>Groups</NavLink>
            </Footer>

        </Container>)
})