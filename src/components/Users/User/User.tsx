import React from 'react';
import styled from 'styled-components';
import {StyledBlock} from "../../../common/styles/styles";
import PersonIcon from '@mui/icons-material/Person';
import {Skeleton} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Button} from '../../../common/styles/mui-styles';
import useTheme from "@mui/material/styles/useTheme";
import {AppStateType} from "../../../redux/store/store";
import {useSelector} from "react-redux";

//styles
const Container = styled(StyledBlock)`
    min-width: 200px;
    margin: 10px 5px;
    display: grid;
    grid-template-rows: 2fr 50px;
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
    padding: 3px 8px 3px 8px;
    font-weight: 700;
    font-size: 13px;
    }
`
const SubTitle = styled.div`
     color: #777a87;
      font-weight: 500;
     font-size: 11px;
     justify-self: center;
     
     
`
const Footer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
width: 80%;
}
`
const IMG = styled.img`
  width: 40%;
  border-radius: 50%;
  position: absolute;
`
export type UserPropsType = {
    name: string
    id: number
    status?: string
    photo?: {
        large?: string
        small?: string
    }
    followed: boolean
    loading: boolean
    follow: (id: number) => void
    unFollow: (id: number) => void
}
export const User: React.FC<UserPropsType> = React.memo(({photo, name, status, followed, loading, id, follow, unFollow}) => {
    const theme = useTheme();
    //array of disabled buttons
    const array = useSelector<AppStateType, Array<number | undefined>>(t => t.users.followingInProgress);
    //user IMG
    const img = Boolean(photo?.large || photo?.small) ? <IMG src={photo?.small || photo?.large} alt=""/> : <PersonIcon/>

    return loading ? <SkeletonEl height={240}/> : <Container>
        <NavItem hover={theme.palette.primary.light} to={`/remember_rct/${id}`}>
            <Background color={theme.palette.primary.light}>
                {
                    img
                }
            </Background>
            <Content id={'content'}>
                <div>{name}</div>
            </Content>
        </NavItem>
        <Footer>
            {followed ?
                <Button
                    variant='filled'
                    onClick={() => unFollow(id)}
                    disabled={array.some(t => t === id)}>Following</Button>
                :
                <Button variant='default'
                        onClick={() => follow(id)}
                        disabled={array.some(t => t === id)}>Follow</Button>
            }
            {status && <SubTitle>{status}</SubTitle>}
        </Footer>
    </Container>
})