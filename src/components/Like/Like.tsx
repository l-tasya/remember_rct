import {Favorite, FavoriteBorder} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';


type LikePropsType = {
    isLiked: boolean;
    likeCallback: ()=>void;
    disabled: boolean
}
const Container = styled.button`
     display: inline-block;
     svg{
     color: red;
     transition: transform 0.3s;
     }
     
`

export const Like: React.FC<LikePropsType> = React.memo(({disabled, isLiked, likeCallback}) => {

    return <Container disabled={disabled}>
        {isLiked ? <Favorite onClick={() => likeCallback()}/> : <FavoriteBorder onClick={() => likeCallback()}/>}
    </Container>
})