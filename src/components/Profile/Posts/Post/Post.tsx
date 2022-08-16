import React from "react";
import styled from "styled-components";
import CancelIcon from '@mui/icons-material/Cancel';
import {ProfileBadge} from "../../../../common/components/Menu/Menu";

export type PostPropsType = {
    id: string
    message: string
    time: string
    removePost: () => void
}
export const Post: React.FC<PostPropsType> = ({message, time, removePost}) => {

    const Container = styled.div`
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    margin: 20px 0;
    padding: 16px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    
`
    const Remove = styled(CancelIcon)`
    &:hover{
    color: red;
    transition: 0.5s;

    }
    grid-column-start: 2;
    grid-row-start: 1;
    justify-self: flex-end;
    align-self: flex-start;
`

    const InfoContainer = styled.div`
      display: grid;
       grid-column-start: 1;
       grid-row-start: 1;
       grid-template-rows: 1fr 1fr;
       grid-template-columns: 50px 1fr;
       
`
    const SubTitle = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    font-weight: 400;
    color: gray;
    
`
    const UserIMG = styled(ProfileBadge)`
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    justify-self: center;
    
`
    const Title = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    font-weight: 600;
    font-size: 15px;
`
    const Content = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 15px 0;
    color: #666;
    font-family: system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';;
`
    const onClickHandler = () => {
        removePost()
    }
    return (
        <Container>
            <InfoContainer>
                <UserIMG src={'http://localhost:3000/static/media/eral.3a96cf0943b92706de14.jpg'}/>
                <Title>Nursain Temirtas</Title>
                <SubTitle>{time}</SubTitle>
            </InfoContainer>

            <Content>
                {message}
            </Content>

            <Remove onClick={() => onClickHandler()} sx={{color: 'darkgrey', fontSize: 15}}/>
        </Container>
    )
}