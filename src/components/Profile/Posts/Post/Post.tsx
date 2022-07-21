import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styled from "styled-components";
export type PostPropsType = {
    id: string
    message: string
    time: string
    removePost: () => void
}
export const Post: React.FC<PostPropsType> = ({ message, time, removePost}) => {
    const Container = styled.div`
    display: flex;
    align-items: center;
`
    return (
        <Container>{message}<span>{time}</span><HighlightOffIcon onClick={()=>removePost()} sx={{color: 'red'}}/></Container>
    )
}