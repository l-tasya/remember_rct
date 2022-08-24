import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledBlock, StyledButton, StyledIMGBadge} from "../../../../common/styles/styles";
import PersonIcon from '@mui/icons-material/Person';
import {AppStateType} from "../../../../redux/store/store";
import {useSelector} from "react-redux";
import {ThemeColorType} from "../../../../redux/reducers/settingsReducer";

export type UserPropsType = {
    name: string
    id: number
    status: string
    photo?: {
        large?: string
        small?: string
    }
    followed: boolean
}

export const User: React.FC<UserPropsType> = React.memo(({photo, name, status,followed}) =>{
    const [follow, setFollow] = useState(followed)
    const color = useSelector<AppStateType, ThemeColorType>(t=>t.settings.themeColor)
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
`
    const Content = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 66%;
    display: flex;
    justify-content: center;
    align-items: end;
    div{
    background: white;
    border-radius: 8px 8px 0 0;
    padding: 0 8px 10px 8px;
    }
`
    const Button = styled(StyledButton)`
    background: ${follow?color.first:'white'};
    opacity: 0.9;
    color: ${follow?color.second:'#3f424b'};
    justify-self: center;
    margin: 5px;
    grid-row-start: 2;
    :hover{
    background: ${follow?'tomato':'mediumspringgreen'};
    transition: 0.3s;
    color: white;
    }
`
    const img = Boolean(photo?.large && photo?.small)? <img src={photo?.small} alt=""/>:<PersonIcon/>
    return <Container>
        <Avatar>{img}</Avatar>
        <Content>
            <div>{name}</div>
            {status && <div>{status}</div>}
        </Content>
        <Button onClick={()=>setFollow(!follow)}>
            {follow?'Following':'Follow'}
        </Button>


    </Container>
})