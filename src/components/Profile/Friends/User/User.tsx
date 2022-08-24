import React from 'react';
import styled from 'styled-components';
import {StyledBlock, StyledIMGBadge} from "../../../../common/styles/styles";
import PersonIcon from '@mui/icons-material/Person';

export type UserPropsType = {
    name: string
    id: number
    status: string
    photo?: {
        large?: string
        small?: string
    }
}

export const User: React.FC<UserPropsType> = React.memo(({photo, name, status,followed}) =>{
    const [follow, setFollow] = useState(followed)
    const color = useSelector<AppStateType, ThemeColorType>(t=>t.settings.themeColor)
    const Container = styled(StyledBlock)`
    margin: 10px 5px;
    display: grid;
    
    
`
    const Avatar = styled(StyledIMGBadge)`
    
`
    const img = Boolean(photo?.large && photo?.small)? <img src={photo?.small} alt=""/>:<PersonIcon/>
    return <Container>
        <Avatar>{img}</Avatar>
        <div>#{id}</div>
        <div>{name}</div>
        {status && <div>{status}</div>}

    </Container>
}