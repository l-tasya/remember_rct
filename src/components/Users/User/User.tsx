import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledBlock, StyledButton, StyledIMGBadge} from "../../../common/styles/styles";
import PersonIcon from '@mui/icons-material/Person';
import {AppStateType} from "../../../redux/store/store";
import {useSelector} from "react-redux";
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";
import {Skeleton} from "@mui/material";
import {NavLink} from "react-router-dom";

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

export const User: React.FC<UserPropsType> = React.memo(({photo, name, status, followed, loading, id}) => {
    const [follow, setFollow] = useState(followed)
    const color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    const Container = styled(StyledBlock)`
    margin: 10px 5px;
    display: grid;
    grid-template-rows: 2fr 1fr;
    padding: 8px;
    position: relative;
`
    const Avatar = styled(StyledIMGBadge)`
    border-radius: 8px;
    background: ${color.second};
    height: 100%;
    
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
    const Button = styled(StyledButton)`
    background: ${follow ? color.first : 'white'};
    opacity: 0.9;
    color: ${follow ? color.second : '#3f424b'};
    justify-self: center;
    margin: 5px;
    grid-row-start: 2;
    :hover{
    background: ${follow ? 'tomato' : 'mediumspringgreen'};
    transition: 0.3s;
    color: white;
    }
`
    const SubTitle = styled.div`
     color: #3f424b;
     font-size: 14px;
     align-self: center;
     align-items: center;
     justify-self: center;
     
     
`
    const img = Boolean(photo?.large && photo?.small) ? <img src={photo?.small} alt=""/> : <PersonIcon/>
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
    color: ${color.first}
    }
    }
`
    return loading ? (
            <SkeletonEl height={240}/>
        )
        :
        (
            <Container>
                <NavItem to={`/${id}`}>
                    <Avatar>{img}</Avatar>
                    <Content id={'content'}>
                        <div>{name}</div>
                    </Content>
                </NavItem>
                <Button onClick={() => setFollow(!follow)}>
                    {follow ? 'Following' : 'Follow'}
                </Button>

                {status && <SubTitle>{status}</SubTitle>}
            </Container>
        )
})