import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledBlock} from "../../../common/styles/styles";
import PersonIcon from '@mui/icons-material/Person';
import {Skeleton} from "@mui/material";
import {NavLink} from "react-router-dom";
import {FollowButton} from '../../../common/styles/mui-styles';
import useTheme from "@mui/material/styles/useTheme";

export type UserPropsType = {
    name: string
    id: number
    status: string
    photo?: {
        large?: string
        small?: string
    }
    followed: boolean
    loading: boolean
}
const Container = styled(StyledBlock)`
    margin: 10px 5px;
    display: grid;
    grid-template-rows: 2fr 1fr;
    padding: 8px;
    position: relative;
`
const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 100%;
    background: ${(props: { color: string }) => props.color}
`
const SkeletonEl = styled(Skeleton)`
       margin: 10px 5px;
    padding: 8px;
    position: relative;
    top: -45px;
`
const NavItem = styled(NavLink)`
    position: relative;
    &:hover{
    #content{
      transition: 0.3s;
    color: ${(props: { hover: string }) => props.hover}
    }
    }
`
const Content = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 66%;
    display: flex;
    justify-content: center;
    align-items: end;
    color: #3f424b;
    div{
    background: white;
    border-radius: 8px 8px 0 0;
    padding: 0 8px 10px 8px;
    font-weight: 700;
    }
`
const SubTitle = styled.div`
     color: #3f424b;
     font-size: 14px;
     align-self: center;
     align-items: center;
     justify-self: center;
     
     
`
export const User: React.FC<UserPropsType> = React.memo(({photo, name, status, followed, loading, id}) => {
    const [follow, setFollow] = useState<boolean>(followed)
    const theme = useTheme()


    const img = Boolean(photo?.large || photo?.small) ? <img src={photo?.small} alt=""/> : <PersonIcon/>
    return loading ? (
            <SkeletonEl height={240}/>
        )
        :
        (
            <Container>
                <NavItem hover={theme.palette.primary.light} to={`/remember_rct/${id}`}>
                    <Background color={theme.palette.primary.light}>{img}</Background>
                    <Content id={'content'}>
                        <div>{name}</div>
                    </Content>
                </NavItem>
                <FollowButton follow={follow} variant='default' onClick={() => setFollow(!follow)}>
                    {follow ? 'Following' : 'Follow'}
                </FollowButton>

                {status && <SubTitle>{status}</SubTitle>}
            </Container>
        )
})