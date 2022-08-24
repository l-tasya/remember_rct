import {Favorite, FavoriteBorder} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';


type LikePropsType = {
    isLiked: boolean;
    likeCallback: ()=>void;
    disabled: boolean
}

export const Like: React.FC<LikePropsType> = React.memo(({disabled,isLiked, likeCallback}) =>{
    const Container = styled.button`
     display: inline-block;
     svg{
     color: red;
     transition: transform 0.3s;
     }
     
`
    return <Container  disabled={disabled}>
        {isLiked?<Favorite onClick={()=>likeCallback()}/>:<FavoriteBorder onClick={()=>likeCallback()}/>}
    </Container>
})